import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl1 from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private _http: HttpClient) {}

  public quizzes() {
    return this._http.get(`${baseUrl1}/quiz/`);
  }

  //add quiz
  public addQuiz(quiz:any) {
    return this._http.post(`${baseUrl1}/quiz/`, quiz);
  }

  //delete quiz
  public deleteQuiz(qId:any) {
    return this._http.delete(`${baseUrl1}/quiz/${qId}`);
  }

  //get the single quiz

  public getQuiz(qId:any) {
    return this._http.get(`${baseUrl1}/quiz/${qId}`);
  }

  //update quiz
  public updateQuiz(quiz:any) {
    return this._http.put(`${baseUrl1}/quiz/`, quiz);
  }

  //get quizzes of category
  public getQuizzesOfCategory(cid:any) {
    return this._http.get(`${baseUrl1}/quiz/category/${cid}`);
  }
  //qet active quizzes
  public getActiveQuizzes() {
    return this._http.get(`${baseUrl1}/quiz/active`);
  }

  //get active quizzes of category
  public getActiveQuizzesOfCategory(cid:any) {
    return this._http.get(`${baseUrl1}/quiz/category/active/${cid}`);
  }
}