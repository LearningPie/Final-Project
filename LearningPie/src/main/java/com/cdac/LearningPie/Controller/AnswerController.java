package com.cdac.LearningPie.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.LearningPie.Services.AnswerService;
import com.cdac.LearningPie.entity.Answers;


@RestController
@CrossOrigin
public class AnswerController {
      @Autowired
      AnswerService answerService;
      
      @PostMapping("/postAnswer")
      public Answers postAnswers(@RequestBody Answers answer) {
    	  return  answerService.postAnswer(answer);
    	  
      }
      
      @GetMapping("/getAll")
      public List<Answers> getAllQuestionsAndAnswers() {
    	  return answerService.getAll();
      }
      
}
