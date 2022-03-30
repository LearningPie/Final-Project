package com.cdac.LearningPie.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.LearningPie.entity.User;

@Repository
public interface UserDao extends JpaRepository<User, Integer>  {
	
	public User findByUserNameAndPassword(String userName, String password);
	
	public User findByUserName(String userName);
}
