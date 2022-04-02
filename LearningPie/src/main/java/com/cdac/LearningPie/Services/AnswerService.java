package com.cdac.LearningPie.Services;

import java.util.List;

import com.cdac.LearningPie.dto.AnswerDto;
import com.cdac.LearningPie.entity.Answers;

public interface AnswerService {
       

		public List<Answers> getAll();

		public void postAnswer(Answers answer, int questionId); 
}
