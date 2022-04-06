package com.cdac.LearningPie.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.LearningPie.entity.Questions;
import com.cdac.LearningPie.repository.QuestionsDao;

@Service
public class QuestionServiceImplementation implements QuestionService {

	@Autowired
	QuestionsDao questiondao;
	@Override
	public Questions postQuestion(Questions question) {
	  return questiondao.save(question);
	}
	@Override
	public List<Questions> getAllQuestions() {
		return questiondao.findAll();
	}
	@Override
	public List<Questions> getAllQuestionsBySubject(String subject) {
		
		return questiondao.getAllQuestionBySubject(subject);
	}
	@Override
	public List<Questions> getAllQuestionsByUser(int userId) {
		return questiondao.getAllByUser(userId);
	}
	@Override
	public void deleteQuestionById(int questionId) {
		questiondao.deleteQuestion(questionId);
	}

	

}
