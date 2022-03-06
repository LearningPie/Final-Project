package com.cdac.LearningPie.Services;

import com.cdac.LearningPie.entity.User;


public interface UserService {
        public void registerUser(User user);
        public User isExistingUser(String username,String password);
}
