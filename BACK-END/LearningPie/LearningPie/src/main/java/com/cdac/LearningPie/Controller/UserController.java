package com.cdac.LearningPie.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.LearningPie.Services.UserService;
import com.cdac.LearningPie.Services.UserServiceImplementation;
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
	  
}
