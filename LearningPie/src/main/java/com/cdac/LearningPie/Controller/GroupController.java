package com.cdac.LearningPie.Controller;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.LearningPie.Services.GroupService;
import com.cdac.LearningPie.dto.GroupInfoDto;
import com.cdac.LearningPie.dto.ProfilePicDetails;
import com.cdac.LearningPie.dto.UploadPdfDetails;
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
	
	@GetMapping("/getAllGroupInfoByUserId/{userId}")
	public List<GroupInfoDto> getAllGroupsInfoByUserId(@PathVariable int userId){
		return groupService.getGroupInfo(userId);
		
	}
	@GetMapping("/getGroupInfo/{groupId}")
	public List<GroupInfo> getGroupInfo(@PathVariable int groupId) {
		return groupService.getInfo(groupId);
	}
	
	

	
}