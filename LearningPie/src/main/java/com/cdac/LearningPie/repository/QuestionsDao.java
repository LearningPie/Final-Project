package com.cdac.LearningPie.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.annotations.Parameter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cdac.LearningPie.entity.Questions;


@Repository
public interface QuestionsDao extends JpaRepository<Questions,Integer> {
   
	@Query(value = "select * from questions where subject=:subject and is_deleted=false",nativeQuery = true)
	public List<Questions> getAllQuestionBySubject(@Param("subject") String subject);

	@Query(value="select * from questions where user_id=:u and is_deleted=false",nativeQuery=true)
	public List<Questions> getAllByUser(@Param("u") int userId);

	@Modifying
	@Transactional
	@Query(value="update questions set is_deleted=true where question_id=:q", nativeQuery = true)
	public void deleteQuestion(@Param("q") int questionId);

    @Query(value="select * from questions where is_deleted=false",nativeQuery = true)
	public List<Questions> getAllNotDeletedQuestions();
	
    @Modifying
    @Transactional
    @Query(value="update questions set group_id=:g where question_id=:q",nativeQuery = true)
	public void changeGroupId(@Param("g")int groupId,@Param("q")int questionId);

//	public void deleteAllQuestions(int[] array);
}
