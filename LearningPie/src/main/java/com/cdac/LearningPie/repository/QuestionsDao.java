package com.cdac.LearningPie.repository;

import java.util.List;

import org.hibernate.annotations.Parameter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cdac.LearningPie.entity.Questions;


@Repository
public interface QuestionsDao extends JpaRepository<Questions,Integer> {
   
	@Query(value = "select * from questions where subject=:subject",nativeQuery = true)
	public List<Questions> getAllQuestionBySubject(@Param("subject") String subject);

	@Query(value="select * from questions where user_id=:u",nativeQuery=true)
	public List<Questions> getAllByUser(@Param("u") int userId);
}
