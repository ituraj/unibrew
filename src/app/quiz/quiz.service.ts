import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../question/question';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  readonly apiUrl: string =
    'https://unibrew-data.firebaseio.com/questions.json';

  public questions: Question[];
  public questionProgress = 0;
  private result;

  constructor(private _httpClient: HttpClient) {}

  getQuestions() {
    return this._httpClient.get(this.apiUrl);
  }
  getResult() {
    this.result = 0;
    for (const question of this.questions) {
      if (question.getUserAnswer() === question.getCorrectAnswer()) {
        this.result++;
      }
    }
    return this.result;
  }
}
