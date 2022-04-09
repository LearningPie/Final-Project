package com.cdac.LearningPie.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cdac.LearningPie.dto.AnswerDto;
import com.cdac.LearningPie.entity.Answers;

@Repository
public interface AnswersDao extends JpaRepository<Answers, Integer>{

	@Modifying
	@Transactional
	@Query(value="insert into answers (answer,question_id,user_id) values (:answer,:questionId,:userId)",nativeQuery = true)
	public void postAnswer(@Param("answer") String answer,@Param("questionId")int questionId,@Param("userId") int userId );
	
//	@Query(value="select answers.answer,questions.question,user.name from ((answers inner join questions on answers.question_id=questions.question_id) inner join user on answers.user_id=user.user_id);",nativeQuery = true)
//	public List<Answers> getAllQuestionsAndAnswers();
	
	public List<Answers> findAll();

	@Query(value="select * from answers where question_id=:q",nativeQuery = true)
	public List<Answers> findAllByQuestionId(@Param("q") int questionId);
           
}
