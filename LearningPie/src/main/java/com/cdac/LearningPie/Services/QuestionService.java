package com.cdac.LearningPie.Services;

import java.util.List;

import com.cdac.LearningPie.entity.Questions;

public interface QuestionService {
     public Questions postQuestion(Questions question);
     public List<Questions> getAllQuestions();
     public List<Questions> getAllQuestionsBySubject(String subject);
	 public List<Questions> getAllQuestionsByUser(int userId);
}
