package com.cdac.LearningPie.Services;

import java.util.List;

import com.cdac.LearningPie.entity.User;


public interface UserService {
	
        public void registerUser(User user);
        
        public User isExistingUser(String username,String password);
        
        public User findByUserName(String userName);
}
