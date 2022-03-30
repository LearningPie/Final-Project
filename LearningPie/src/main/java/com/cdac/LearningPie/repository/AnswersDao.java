package com.cdac.LearningPie.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cdac.LearningPie.entity.Answers;

@Repository
public interface AnswersDao extends JpaRepository<Answers, Integer>{

	@Query(value="select answers.answer,questions.question,user.name from ((answers inner join questions on answers.question_id=questions.question_id) inner join user on answers.user_id=user.user_id);",nativeQuery = true)
	public List<Answers> getAllQuestionsAndAnswers();
           
}
