package com.cdac.LearningPie.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.LearningPie.entity.Answers;
import com.cdac.LearningPie.repository.AnswersDao;

@Service
public class AnswerServiceImplementation implements AnswerService {
	@Autowired
	AnswersDao answerDao;

	@Override
	public Answers postAnswer(Answers answer) {
		return answerDao.save(answer);
	}

	@Override
	public List<Answers> getAll() {
		return answerDao.getAllQuestionsAndAnswers();
	}

}
