package com.cdac.LearningPie.Services;

import java.util.List;

import com.cdac.LearningPie.dto.UserDto;
import com.cdac.LearningPie.entity.GroupInfo;
import com.cdac.LearningPie.entity.User;


public interface UserService {
	
        public void registerUser(User user);
        
        public User isExistingUser(String username,String password);
        
        public User findByUserName(String userName);
        
        public String findUserByEmail(String email); 
        
        public int updatePassword(String password, String email, String userotp);
        
        public int updateUser(String name, String email, String phoneNo, String password, String userName);
        
        public List<User> getAllUsers();
        
        public void deleteUser(int userId);
        
        public User getUser(String userName);

        public void joinGroupByUserId(int userId, int groupId);

        public User findByUserId(int userId);
        
        public void updateUser(User u);

		public void deleteAll(int[] array);
		
}
