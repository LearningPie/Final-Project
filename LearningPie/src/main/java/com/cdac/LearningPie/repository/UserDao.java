package com.cdac.LearningPie.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.LearningPie.entity.User;

@Repository
public interface UserDao extends JpaRepository<User, Integer>  {
	
	public List<User> findByUserNameAndPassword(String userName, String password);
	
	public List<User> findByUserName(String userName);
}
