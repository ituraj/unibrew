import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlagsComponent } from './flags/flags.component';
import { SecondaryFormComponent } from './secondary-form/secondary-form.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { QuizIntroComponent } from './quiz-intro/quiz-intro.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { MainFormComponent } from './main-form/main-form.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  { path: '', component: FlagsComponent },
  { path: 'flags', component: FlagsComponent },
  { path: 'drivers-register', component: SecondaryFormComponent },
  { path: 'workplace-safety', component: DragDropComponent },
  { path: 'quiz-intro', component: QuizIntroComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'result', component: ResultComponent },
  { path: 'main-form', component: MainFormComponent },
  { path: 'print-layout', component: PrintLayoutComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-login', component: AdminLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
