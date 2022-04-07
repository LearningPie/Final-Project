package com.cdac.LearningPie.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
     
     @PostMapping("postQuestionInGroup/{groupId}")
     public Questions postQuestionInGroup(@RequestBody Questions question,@PathVariable int groupId) {
    	 return questionService.postQuestionByUser(question,groupId);
     }
     @GetMapping("/getAllQuestions")
     public List<Questions> getAll(){
    	return questionService.getAllQuestions();
     }
     
     @GetMapping("/getAllQuestionsBySubject/{subject}")
     public List<Questions> getAllQuestionsBySubject(@PathVariable String subject){
    	 return questionService.getAllQuestionsBySubject(subject);
     }

     @GetMapping("/getAllQuestionsByUser/{userId}")
     public List<Questions> getAllQuestionsByUser(@PathVariable int userId){
    	 return questionService.getAllQuestionsByUser(userId);
    	 
     }
     
     @GetMapping("/deleteQuestion/{questionId}")
     public void deleteQuestion(@PathVariable int questionId) {
    	 questionService.deleteQuestionById(questionId);
     }
     
     @PostMapping("/deleteQuestions")
     public void deleteQuestionsArray(@RequestBody int[] array) {
    	 questionService.deleteAll(array);
     }
    
}
