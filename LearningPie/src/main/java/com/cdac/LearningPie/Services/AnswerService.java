package com.cdac.LearningPie.Services;

import java.util.List;

import com.cdac.LearningPie.entity.Answers;

public interface AnswerService {
        public Answers postAnswer(Answers answer);

		public List<Answers> getAll(); 
}
