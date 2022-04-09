package com.cdac.LearningPie.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cdac.LearningPie.entity.GroupInfo;
import com.cdac.LearningPie.entity.User;
@Repository
public interface GroupDao extends JpaRepository<GroupInfo, Integer> {
	public GroupInfo findByGroupNameAndGroupPassword(String userName, String password);

	@Query(value="select * from group_info where group_id=:g", nativeQuery = true)
	public List<GroupInfo> findByGroupId(@Param("g") int groupId);

	@Query(value="select * from group_info_user_list inner join group_info on group_info_user_list.group_list_group_id=group_info.group_id where user_list_user_id=:u",nativeQuery = true)
	public List<GroupInfo> findAllGroupsInfoByUserId(@Param("u") int userId);
	
	
	
//	@Query(value="update")
//	public void joinGroup(int userId);
}
