package com.cdac.LearningPie.Controller;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import javax.mail.Multipart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cdac.LearningPie.Services.UserService;
import com.cdac.LearningPie.dto.GroupDto;
import com.cdac.LearningPie.dto.ProfilePicDetails;
import com.cdac.LearningPie.dto.UserDto;
import com.cdac.LearningPie.dto.VerifyOtpDto;
import com.cdac.LearningPie.entity.GroupInfo;
import com.cdac.LearningPie.entity.User;
import com.cdac.LearningPie.repository.UserDao;


@RestController
@CrossOrigin
public class UserController {
	@Autowired
	private UserService userService;

	@PostMapping("/register")
	public void registerUser(@RequestBody User user) {
		userService.registerUser(user);
	}
	
	@PostMapping("/upload-profile-pic")
	public void uploadPic(ProfilePicDetails profilePicDetails) {
		
		System.out.println(profilePicDetails.getProfilePic().getOriginalFilename());

		//store the image in some folder
		String uploadedPicName = profilePicDetails.getProfilePic().getOriginalFilename();
		String fileName = profilePicDetails.getUserId() + "-" + uploadedPicName;
//		
		try {
			FileCopyUtils.copy(profilePicDetails.getProfilePic().getInputStream(), new FileOutputStream("C:\\Users\\hp\\OneDrive\\Desktop\\Project Main\\PROJECT-IN-ZIP-main (1)\\FRONT-END\\public\\Uploaded\\ProfilePic\\"+fileName));
		} catch (IOException e) {
			//hoping there won't be any error
		}
		
		User u=userService.findByUserId(profilePicDetails.getUserId());
		u.setProfilePicName(fileName);
		userService.updateUser(u);
//		
//		//update the information in the db
//		Customer customer = customerService.fetch(profilePicDetails.getCustomerId());
//		customer.setProfilePic(fileName);
//		customerService.update(customer);
//		
//		PicUploadStatus status = new PicUploadStatus();
//		status.setStatus(true);
//		status.setMessage("Pic uploaded!");
//		return status;
	}

	@PostMapping("/login")
	public User loginUser(@RequestBody User user) {
		return userService.isExistingUser(user.getUserName(), user.getPassword());
	}

	@PostMapping("/verifyEmail")
	public String verifyEmail(@RequestBody User user) {
		return userService.findUserByEmail(user.getEmail());
	}
	
	@PutMapping("/updatepassword")
	public int updatePassword(@RequestBody VerifyOtpDto verifyOtpDto) {
		return userService.updatePassword(verifyOtpDto.getPassword(),verifyOtpDto.getEmail(), verifyOtpDto.getOtp());
	}
	
	@PostMapping("/findbyusername")
	public User findByUserName(@RequestBody User user) {
		return userService.findByUserName(user.getUserName());
	}

	@PostMapping("/joinGroup")
	public void joinGroup(@RequestBody GroupDto groupDto) {
		userService.joinGroupByUserId(groupDto.getUserId(),groupDto.getGroupId());
	}
	
	@PutMapping("/updateuser/{uname}")
	public int updateUser(@RequestBody User user, @PathVariable String uname) {
		return userService.updateUser(user.getName(), user.getEmail(), user.getPhoneNo(), user.getPassword(), uname);
	}

	@GetMapping("/getallusers")
	public List<User> getAllUsers(User user) {
		return userService.getAllUsers();
	}

	@PostMapping("/getuser/{uname}")
	public User getUser(@PathVariable String uname) {
		return userService.getUser(uname);
	}

	@DeleteMapping("deleteuser/{uid}")
	public String deleteUser(@PathVariable int uid) {
		userService.deleteUser(uid);
		return "Deleted";
	}
	
	 @PostMapping("/deleteusers")
     public void deleteQuestionsArray(@RequestBody int[] array) {
    	 userService.deleteAll(array);
     }
    

}
