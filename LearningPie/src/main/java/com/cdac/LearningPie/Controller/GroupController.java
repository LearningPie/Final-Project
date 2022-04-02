package com.cdac.LearningPie.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.LearningPie.Services.GroupService;
import com.cdac.LearningPie.entity.GroupInfo;

@RestController
@CrossOrigin
public class GroupController{
	
	@Autowired
	private GroupService groupService;
	
	@PostMapping("/createGroup")
	public GroupInfo registerGroup(@RequestBody GroupInfo group) {
		return groupService.register(group);
	}
	@GetMapping("/getAllGroupsInfo")
	public List<GroupInfo> getAllGroupsInfo(){
		return groupService.getAll();
	}
	
}