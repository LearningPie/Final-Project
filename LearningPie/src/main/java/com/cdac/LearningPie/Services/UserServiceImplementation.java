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
	public List<User> isExistingUser(String userName, String password) {
		return	userDao.findByUserNameAndPassword(userName,password);
	}
    
	@Override
	public List<User> findByUserName(String userName){
		return userDao.findByUserName(userName);	
	}
	
}
