package com.cdac.LearningPie.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.LearningPie.entity.GroupInfo;
import com.cdac.LearningPie.entity.User;
@Repository
public interface GroupDao extends JpaRepository<GroupInfo, Integer> {
	public GroupInfo findByGroupNameAndGroupPassword(String userName, String password);
}
