package com.cdac.LearningPie.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.LearningPie.entity.Files;
import com.cdac.LearningPie.repository.FileDao;

@Service
public class FileServiceImplementation implements FileService{
	@Autowired
	private FileDao fileDao;

	@Override
	public void uploadFile(int i, String fileName) {
		fileDao.upload(i,fileName);
		
	}

//	@Override
//	public List<Files> getAll() {
//		return fileDao.findAll();
//	}

}
