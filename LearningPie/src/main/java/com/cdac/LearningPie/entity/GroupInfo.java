package com.cdac.LearningPie.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity

public class GroupInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int groupId;
	private String groupName;
	private String groupPassword;
	private int admin;
	
	@OneToMany(mappedBy = "group")
	@JsonIgnore
	private List<Files> file;
	
	
	@ManyToMany
	@JoinColumn(name = "user_id")
	@JsonIgnore
	private List<User> userList;
	
	
	
	@OneToMany(mappedBy = "group")
	private List<Questions> question;



	public int getGroupId() {
		return groupId;
	}



	public void setGroupId(int groupId) {
		this.groupId = groupId;
	}



	public String getGroupName() {
		return groupName;
	}



	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}



	public String getGroupPassword() {
		return groupPassword;
	}



	public void setGroupPassword(String groupPassword) {
		this.groupPassword = groupPassword;
	}



	public int getAdmin() {
		return admin;
	}



	public void setAdmin(int admin) {
		this.admin = admin;
	}



	public List<Files> getFile() {
		return file;
	}



	public void setFile(List<Files> file) {
		this.file = file;
	}



	public List<User> getUserList() {
		return userList;
	}



	public void setUserList(List<User> userList) {
		this.userList = userList;
	}



	public List<Questions> getQuestion() {
		return question;
	}



	public void setQuestion(List<Questions> question) {
		this.question = question;
	}



	@Override
	public String toString() {
		return "GroupInfo [groupId=" + groupId + ", groupName=" + groupName + ", groupPassword=" + groupPassword
				+ ", admin=" + admin + ", file=" + file + ", userList=" + userList + ", question=" + question + "]";
	}
	

	
}
