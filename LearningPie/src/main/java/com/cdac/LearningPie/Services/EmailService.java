package com.cdac.LearningPie.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

	 @Autowired
	 private JavaMailSender emailSender;

	 public void sendEmailForNewRegistration(String email) {
	   SimpleMailMessage message = new SimpleMailMessage(); 
       message.setFrom("noreply@abc.com");
       message.setTo(email); 
       message.setSubject("Thank you for Registering with Learning Pie!"); 
       message.setText("Thank you for Registering with Learning Pie!");
       emailSender.send(message);
	 }
	 
	 public void sendOtpToMail(String email,String otp) {
		 SimpleMailMessage message = new SimpleMailMessage(); 
	       message.setFrom("noreply@abc.com");
	       message.setTo(email); 
	       message.setSubject("Forgot Password"); 
	       message.setText("Your One Time Password is : "+otp);
	       emailSender.send(message);
	 }
}
