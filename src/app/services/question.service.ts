import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl1 from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private _http: HttpClient) {}
// this is for admin only
  public getQuestionsOfQuiz(qid:any) {
    return this._http.get(`${baseUrl1}/question/quiz/all/${qid}`);
  }
// this is for user case
  public getQuestionsOfQuizForTest(qid:any) {
    return this._http.get(`${baseUrl1}/question/quiz/${qid}`);
  }

  //add question
  public addQuestion(question:any) {
    return this._http.post(`${baseUrl1}/question/`, question);
  }
  //delete question
  public deleteQuestion(questionId:any) {
    return this._http.delete(`${baseUrl1}/question/${questionId}`);
  }
  // update question
  public updateQuestion(question:any){
   return this._http.put(`${baseUrl1}/question/`, question);
    
  }
  //eval quiz
  public evalQuiz(questions:any) {
    return this._http.post(`${baseUrl1}/question/eval-quiz`, questions);
  }
}
