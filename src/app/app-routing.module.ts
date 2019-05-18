import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlagsComponent } from './flags/flags.component';
import { ArrivalComponent } from './arrival/arrival.component';
import { DepartureComponent } from './departure/departure.component';
import { PrintComponent } from './print/print.component';
import { SecondaryFormComponent } from './secondary-form/secondary-form.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { QuizIntroComponent } from './quiz-intro/quiz-intro.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { MainFormComponent } from './main-form/main-form.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';

const routes: Routes = [
  { path: '', component: FlagsComponent },
  { path: 'flags', component: FlagsComponent },
  { path: 'arrival', component: ArrivalComponent },
  { path: 'departure', component: DepartureComponent },
  { path: 'print', component: PrintComponent },
  { path: 'drivers-register', component: SecondaryFormComponent },
  { path: 'workplace-safety', component: DragDropComponent },
  { path: 'quiz-intro', component: QuizIntroComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'result', component: ResultComponent },
  { path: 'main-form', component: MainFormComponent },
  { path: 'print-layout', component: PrintLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
