package com.cdac.LearningPie.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.LearningPie.Services.QuestionService;
import com.cdac.LearningPie.entity.Questions;

@RestController
@CrossOrigin
public class QuestionController {
     @Autowired
     QuestionService questionService;
     
     @PostMapping("/postQuestion")
     public Questions postQuestion(@RequestBody Questions question)
     {
    	return questionService.postQuestion(question);	 
     }
     
     @GetMapping("/getAllQuestions")
     public List<Questions> getAll(){
    	return questionService.getAllQuestions();
     }
}
