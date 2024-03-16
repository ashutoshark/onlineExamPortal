import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {
  qId=26;
  qTitle="computer science";
  questions = [{
    quesId:1,
    content:"what is six alpha",
    image:"hello.png",
    option1:"a",
    option2:"b",
    option3:"c",
    option4:"d",
    
    answer:"e"
  }];

  constructor(
    private _route: ActivatedRoute,
    private _question: QuestionService,
    private _snak: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];
    this._question.getQuestionsOfQuiz(this.qId).subscribe(
      (data: any) => {
        console.log(data);
        this.questions = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //delete quesion
  deleteQuestion(qid:any) {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure , want to delete this question?',
    }).then((result) => {
      if (result.isConfirmed) {
        //confim
        this._question.deleteQuestion(qid).subscribe(
          (data) => {
            this._snak.open('Question Deleted ', '', {
              duration: 3000,
            });
            this.questions = this.questions.filter((q) => q.quesId != qid);
          },

          (error) => {
            this._snak.open('Error in deleting questions', '', {
              duration: 3000,
            });
            console.log(error);
          }
        );
      }
    });
  }
  // updation of question
  
  updateQuestion(qid:any) {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Update',
      title: 'Are you sure , want to update this question?',
    }).then((result) => {
      if (result.isConfirmed) {
        //confim
        this._question.updateQuestion(qid).subscribe(
          (data) => {
            this._snak.open('Question updatede ', '', {
              duration: 3000,
            });
            this.questions = this.questions.filter((q) => q.quesId = qid);
          },

          (error) => {
            this._snak.open('Error in updating questions', '', {
              duration: 3000,
            });
            console.log(error);
          }
        );
      }
    });
  }
  
}

