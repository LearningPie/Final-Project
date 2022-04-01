package com.cdac.LearningPie.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.LearningPie.dto.AnswerDto;
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

//  @Override
//	public List<Answers> getAll() {
//		List<Answers> listOfAnswers =answerDao.findAll();
//		List<AnswerDto> answers=new ArrayList<AnswerDto>();
//	    ListIterator<Answers> i=listOfAnswers.listIterator();
//	    while(i.hasNext())
//	    {
//	    	AnswerDto answer=new AnswerDto();
//	    	answer.setAnswer(i.next().getAnswer());
//	    	answer.setQuestion(i.next().getQuestion().getQuestion());
//	    	answer.setUserName(i.next().getUser().getUserName());
//	    }
//		;
//		return answerDao.getAllQuestionsAndAnswers();
//	}
	
	public List<Answers> getAll(){
		return answerDao.findAll();
	}

}
