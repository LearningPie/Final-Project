package com.cdac.LearningPie.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cdac.LearningPie.entity.Files;

@Repository
public interface FileDao extends JpaRepository<Files, Integer>{

	 @Modifying
	 @Transactional
	 @Query(value="insert into files(group_id,file_name) values (:g,:file)",nativeQuery = true)
     public void upload(@Param("g")int i,@Param("file") String fileName);

//	 @Query(value="select * from ")
//	public List<Files> findAllByGroupId(int group_id);

}
