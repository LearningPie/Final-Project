package com.cdac.LearningPie.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	public User isExistingUser(String userName, String password) {
		User user=userDao.findByUserNameAndPassword(userName,password);
		if(user==null) {
			//throw new UserNotFoundException();
		}
		return user;
	}
    
	@Override
	public User findByUserName(String userName){
		return userDao.findByUserName(userName);	
	}
	
}
