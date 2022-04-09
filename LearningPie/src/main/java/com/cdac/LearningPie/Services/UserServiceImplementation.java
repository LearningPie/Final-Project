package com.cdac.LearningPie.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.cdac.LearningPie.dto.UserDto;
import com.cdac.LearningPie.entity.GroupInfo;
import com.cdac.LearningPie.entity.User;
import com.cdac.LearningPie.repository.UserDao;

@Service
public class UserServiceImplementation implements UserService {

	@Autowired
    private UserDao userDao;
	@Autowired
	private EmailService emailService;
    
	private String otp=OTPService.generateOtp();
	
	@Override
	public void registerUser(User user) {
	    user.setPassword(PasswordEncryption.bcryptPassword(user.getPassword()));
		userDao.save(user);	
		emailService.sendEmailForNewRegistration(user.getEmail());
		
	}

	@Override
	public User isExistingUser(String userName, String password) {
		//System.out.println(OTPService.generateOtp());
		User user=userDao.findByUserName(userName);
		//System.out.println(userName);
		System.out.println(PasswordEncryption.bcryptPassword(password));
		BCryptPasswordEncoder passwordEncoder=new BCryptPasswordEncoder();
		if(	passwordEncoder.matches(password, user.getPassword()))
		{
			return user;
		}
		return null;
		
	}
    
	@Override
	public User findByUserName(String userName){
		return userDao.findByUserName(userName);	
	}
	
	
	@Override
	public int updateUser(String name, String email, String phoneNo, String password, String userName) {
		return userDao.updateUser(name, email, phoneNo, password, userName);
	}
	
	@Override
	public List<User> getAllUsers() {
		return userDao.getAllUsersNotDeleted();
	}
	
	@Override
	public User getUser(String userName) {
		return userDao.getUser(userName);
	}
	
	@Override
	public void deleteUser(int userId) {
		userDao.deleteUser(userId);
	}

	@Override
	public void joinGroupByUserId(int userId,int groupId) {
		if (isExistingMember(userId, groupId) == null) {
			userDao.joinGroup(userId, groupId);
		}
	}
	
	public Object isExistingMember(int userId,int groupId) {
		return userDao.existingMember(userId,groupId);
	}

	public User findByUserId(int userId) {
		return userDao.findById(userId);
	}

	@Override
	public void updateUser(User u) {
		userDao.save(u);
		
	}

	@Override
	public void deleteAll(int[] array) {
		for(int userId:array)
		{
			userDao.deleteUser(userId);
		}
		
	}

	@Override
	public String findUserByEmail(String email) { 
		 System.out.println(email+" "+otp);
	     if(userDao.findByEmail(email)!=null) {	 
	    	 emailService.sendOtpToMail(email, otp);
	    	 
	    	 return "Email Verified";
	     }
	     return "Not Valid Email";
	}

	@Override
	public int updatePassword(String password, String email, String userotp) {
//		System.out.println(otp==userotp);
//		System.out.println(otp);
//		System.out.println(userotp);
		if(otp.equals(userotp)) {
		  userDao.updatePassword(password, email);
		  return 1;
		}
//		userDao.updatePassword(password, email);
		return -1;
	}
	
}
