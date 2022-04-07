package com.cdac.LearningPie.Controller;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.LearningPie.Services.FileService;
import com.cdac.LearningPie.dto.UploadPdfDetails;
import com.cdac.LearningPie.entity.Files;

@RestController
@CrossOrigin
public class FileController {

	@Autowired
	private FileService fileService;

	@PostMapping("/upload-pdfs")
	public void uploadPic(UploadPdfDetails profilePicDetails) {

		System.out.println(profilePicDetails.getProfilePic().getOriginalFilename());
		System.out.println(profilePicDetails.getGroupId());

		// store the image in some folder
		String uploadedPicName = profilePicDetails.getProfilePic().getOriginalFilename();
		String fileName = profilePicDetails.getGroupId() + "-" + uploadedPicName;

		try {
			FileCopyUtils.copy(profilePicDetails.getProfilePic().getInputStream(), new FileOutputStream(
					"C:\\Users\\hp\\OneDrive\\Desktop\\Project Main\\PROJECT-IN-ZIP-main (1)\\FRONT-END\\public\\Uploaded\\Pdf\\"
							+ fileName));
		} catch (IOException e) {
			// hoping there won't be any error
		}

		fileService.uploadFile(profilePicDetails.getGroupId(), fileName);

	}

//	@GetMapping("/getAllFilesByGroupId")
//	public List<Files> getAllFilesByGroupId(){
//		return fileService.getAll();
//		
//	}
}
