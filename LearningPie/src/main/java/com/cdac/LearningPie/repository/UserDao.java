package com.cdac.LearningPie.repository;



import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cdac.LearningPie.dto.UserDto;
import com.cdac.LearningPie.entity.GroupInfo;
import com.cdac.LearningPie.entity.User;

@Repository
public interface UserDao extends JpaRepository<User, Integer>  {
	
	public List<User> findByUserNameAndPassword(String userName, String password);
	
	public User findByUserName(String userName);
	
	public User findById(int userId);
	@Modifying
	@Transactional
    @Query(value="update user set name=:n, email=:e, phone_no=:p, password=:pa where user_name=:un", nativeQuery = true)
    public int updateUser(@Param("n") String name, @Param("e") String email, @Param("p") String phoneNo, @Param("pa") String password, @Param("un") String userName);

	
	@Query(value="select * from user where user_name=:un", nativeQuery = true)
	public User getUser(@Param("un") String userName);

	
    @Modifying
    @Transactional
	@Query(value="insert into group_info_user_list (group_list_group_id,user_list_user_id) values (:g,:u);",nativeQuery = true)
	public void joinGroup(@Param("u") int userId,@Param("g")int groupId);
    
    @Query(value="select user_name,name from user_group_table inner join user on user_group_table.user_id=user.user_id where user.group_id=:g",nativeQuery = true)
	public List<User> findAllById(@Param("g") int groupId);

    @Query(value="select count(*) from group_info_user_list where user_list_user_id=:u and group_list_group_id=:g group by user_list_user_id ", nativeQuery = true)
    public Object existingMember(@Param("u")int userId,@Param("g") int groupId);

//    @Query(value="select user_id from ")
//	public void existingMember(int userId, int groupId);
    
    @Modifying
    @Transactional
    @Query(value="update user set is_deleted=true where user_id=:u",nativeQuery=true)
    public void deleteUser(@Param("u") int userId);
    
//	get all register users
	@Query(value="select * from user where is_deleted != true", nativeQuery = true)
	public List<User> getAllUsersNotDeleted();

}
