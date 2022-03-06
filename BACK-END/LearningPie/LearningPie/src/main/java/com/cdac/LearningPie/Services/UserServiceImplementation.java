package com.cdac.LearningPie.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.LearningPie.entity.User;
import com.cdac.LearningPie.repository.UserDao;

@Service
public class UserServiceImplementation implements UserService {

	@Autowired
    private UserDao userDao;
	@Override
	public void registerUser(User user) {
		userDao.save(user);	
	}

	@Override
	public User isExistingUser(String username, String password) {
		// TODO Auto-generated method stub
		return null;
	}

}
