package com.cdac.LearningPie.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cdac.LearningPie.entity.GroupInfo;

public interface GroupService {
    public GroupInfo isExistingGroup(GroupInfo group);

	public List<GroupInfo> getAll();

	public GroupInfo register(GroupInfo group);
}
