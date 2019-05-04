import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from './quiz.service';
import shuffle from '../utils';
import { Question } from '../question/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  constructor(private router: Router, public quizService: QuizService) {}

  ngOnInit() {
    this.quizService.questions = [];
    this.quizService.questionProgress = 0;
    this.quizService.getQuestions().subscribe((data: any) => {
      data.results.map(result => {
        const answers = shuffle(
          result.incorrect_answers.concat(result.correct_answer)
        );
        const correct = result.correct_answer;
        const content = result.question;
        const question: Question = new Question(answers, correct, content);
        this.quizService.questions.push(question);
      });
    });
  }

  answerQuestion(answer: string) {
    this.quizService.questions[
      this.quizService.questionProgress
    ].userAnswer = answer;
    this.quizService.questionProgress++;

    if (this.quizService.questionProgress === 7) {
      this.router.navigate(['/result']);
    }
  }
}
