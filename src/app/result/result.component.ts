import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  constructor(public quizService: QuizService, private router: Router) {}

  ngOnInit() {
    this.quizService.getResult();
  }

  restart() {
    this.router.navigate(['/quiz']);
  }
}
