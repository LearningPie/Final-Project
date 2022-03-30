package com.cdac.LearningPie.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.LearningPie.entity.GroupInfo;
import com.cdac.LearningPie.repository.GroupDao;

public class GroupServiceImplementation implements GroupService {

	@Autowired
	private GroupDao groupDao;
	@Override
	public GroupInfo isExistingGroup(GroupInfo group) {
        return  groupDao.findByGroupNameAndGroupPassword(group.getGroupName(),group.getGroupPassword());
	}

}
