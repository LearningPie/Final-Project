package com.cdac.LearningPie.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
	
	@Override
	public void registerUser(User user) {
		userDao.save(user);	
		emailService.sendEmailForNewRegistration(user.getEmail());
	}

	@Override
	public List<User> isExistingUser(String userName, String password) {
		List<User> listOfUser=userDao.findByUserNameAndPassword(userName,password);
		
		return listOfUser;
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
	
}
