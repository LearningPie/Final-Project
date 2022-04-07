
package com.cdac.LearningPie.dto;

import org.springframework.web.multipart.MultipartFile;

public class ProfilePicDetails {

	private int userId;
	private MultipartFile profilePic;

	public MultipartFile getProfilePic() {
		return profilePic;
	}

	public void setProfilePic(MultipartFile profilePic) {
		this.profilePic = profilePic;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

}
