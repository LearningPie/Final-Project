package com.cdac.LearningPie.entity;

import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private int userId;
	private String name;
	private String email;
	private String userName;
	private String password;
	private String phoneNo; 
	private String securityQuestion;
	private boolean status = false;
	private String securityAnswer;
	
	@OneToMany(mappedBy = "user")
	@JsonIgnore
	private List<Questions> questionList;
	
	
	@OneToMany(mappedBy = "user")
	@JsonIgnore
	private List<Answers> answerList;
	
	@ManyToMany(mappedBy = "userList")
	@JsonIgnore
	private List<GroupInfo> groupList;

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getSecurityQuestion() {
		return securityQuestion;
	}

	public void setSecurityQuestion(String securityQuestion) {
		this.securityQuestion = securityQuestion;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getSecurityAnswer() {
		return securityAnswer;
	}

	public void setSecurityAnswer(String securityAnswer) {
		this.securityAnswer = securityAnswer;
	}

	public List<Questions> getQuestionList() {
		return questionList;
	}

	public void setQuestionList(List<Questions> questionList) {
		this.questionList = questionList;
	}

	public List<Answers> getAnswerList() {
		return answerList;
	}

	public void setAnswerList(List<Answers> answerList) {
		this.answerList = answerList;
	}

	public List<GroupInfo> getGroupList() {
		return groupList;
	}

	public void setGroupList(List<GroupInfo> groupList) {
		this.groupList = groupList;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", name=" + name + ", email=" + email + ", userName=" + userName
				+ ", password=" + password + ", phoneNo=" + phoneNo + ", securityQuestion=" + securityQuestion
				+ ", status=" + status + ", securityAnswer=" + securityAnswer + ", questionList=" + questionList
				+ ", answerList=" + answerList + ", groupList=" + groupList + "]";
	}
	
	
	
	
	
	
}
