package com.cdac.LearningPie.Services;

import org.springframework.stereotype.Service;

import com.cdac.LearningPie.entity.GroupInfo;

public interface GroupService {
    public GroupInfo isExistingGroup(GroupInfo group);
}
