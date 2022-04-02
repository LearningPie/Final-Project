package com.cdac.LearningPie.Controller;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

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

import com.cdac.LearningPie.Services.UserService;
import com.cdac.LearningPie.dto.UserDto;
import com.cdac.LearningPie.entity.User;



@RestController
@CrossOrigin
public class UserController {
	  @Autowired
      private UserService userService;
	  
	  @PostMapping("/register")
	  public void registerUser(@RequestBody User user) {
		  userService.registerUser(user);
	  }
	  
	  @PostMapping("/login")
	  public List<User> loginUser(@RequestBody User user) {
			return userService.isExistingUser(user.getUserName(), user.getPassword()) ;	  
	  }
	  
	  @PostMapping("/findbyusername")
	  public User findByUserName(@RequestBody User user){
		return userService.findByUserName(user.getUserName());
	  }
	  
	  @PutMapping("/updateuser/{uname}")
	  public int updateUser(@RequestBody User user, @PathVariable String uname) {
		  return userService.updateUser(user.getName(), user.getEmail(), user.getPhoneNo(), user.getPassword(), uname);
	  }
	  
	  @GetMapping("/getallusers")
		public List<User> getAllUsers(User user){	
			return userService.getAllUsers();	
		}
	  
	   @PostMapping("/getuser/{uname}")
	   public User getUser( @PathVariable String uname) {
			return userService.getUser(uname);
		}
			  
	  @DeleteMapping("deleteuser/{uid}")
		public String deleteUser(@PathVariable int uid) {
			userService.deleteUser(uid);
			return "Deleted";
		}
	  
}
