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
		return questiondao.getAllNotDeletedQuestions();
		
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
	@Override
	public void deleteAll(int[] array) {
		for( int questionId:array)
		{
			questiondao.deleteQuestion(questionId);
		}
	}
	@Override
	public Questions postQuestionByUser(Questions question,int groupId) {
		questiondao.save(question);
		questiondao.changeGroupId(groupId,question.getQuestionId());
		return null;
	}

	

}
