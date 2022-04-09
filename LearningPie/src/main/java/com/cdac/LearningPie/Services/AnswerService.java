package com.cdac.LearningPie.Services;

import java.util.List;

import com.cdac.LearningPie.dto.AnswerDto;
import com.cdac.LearningPie.entity.Answers;

public interface AnswerService {
       

		public List<Answers> getAll();

		void postAnswer(String answer, int questionId, int userId);

		public List<Answers> getAllAnswers(int questionId);

//		public void postAnswer(Answers answer, int questionId);
//		public void postAnswer(Answers answer);
}
