package com.cdac.LearningPie.repository;



import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cdac.LearningPie.entity.User;

@Repository
public interface UserDao extends JpaRepository<User, Integer>  {
	
	public List<User> findByUserNameAndPassword(String userName, String password);
	
	public User findByUserName(String userName);
	
	@Modifying
	@Transactional
    @Query(value="update user set name=:n, email=:e, phone_no=:p, password=:pa where user_name=:un", nativeQuery = true)
    public int updateUser(@Param("n") String name, @Param("e") String email, @Param("p") String phoneNo, @Param("pa") String password, @Param("un") String userName);

	
	@Query(value="select * from user where user_name=:un", nativeQuery = true)
	public User getUser(@Param("un") String userName);
}
