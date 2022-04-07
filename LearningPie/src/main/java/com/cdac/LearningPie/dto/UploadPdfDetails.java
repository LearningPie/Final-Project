package com.cdac.LearningPie.dto;

import org.springframework.web.multipart.MultipartFile;

public class UploadPdfDetails {

	private int groupId;
	private MultipartFile profilePic;
	
	public MultipartFile getProfilePic() {
		return profilePic;
	}
	public void setProfilePic(MultipartFile profilePic) {
		this.profilePic = profilePic;
	}
	public int getGroupId() {
		return groupId;
	}
	public void setGroupId(int groupId) {
		this.groupId = groupId;
	}
	
	
	
}