package com.cdac.LearningPie.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity

public class Answers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int answerId;
	private String answer;
	
	@ManyToOne
	@JoinColumn(name="question_id")
	@JsonIgnore
	private Questions question;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	public int getAnswerId() {
		return answerId;
	}

	public void setAnswerId(int answerId) {
		this.answerId = answerId;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public Questions getQuestion() {
		return question;
	}

	public void setQuestion(Questions question) {
		this.question = question;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Answers [answerId=" + answerId + ", answer=" + answer + ", question=" + question + ", user=" + user
				+ "]";
	}

}
