package com.cdac.LearningPie.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.LearningPie.entity.GroupInfo;
import com.cdac.LearningPie.repository.GroupDao;

@Service
public class GroupServiceImplementation implements GroupService {

	@Autowired
	private GroupDao groupDao;
	@Override
	public GroupInfo isExistingGroup(GroupInfo group) {
        return  groupDao.findByGroupNameAndGroupPassword(group.getGroupName(),group.getGroupPassword());
	}
	@Override
	public List<GroupInfo> getAll() {
		return groupDao.findAll();
	}
	@Override
	public GroupInfo register(GroupInfo group) {
		return groupDao.save(group);
	}

}
