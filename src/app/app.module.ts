import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Material Design
import {
  MatCardModule,
  MatStepperModule,
  MatIconModule
} from '@angular/material';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule
} from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';

// Animations

import { ToastrModule } from 'ngx-toastr';
import { DragDropModule } from '@angular/cdk/drag-drop';

// Environments

import { environment } from 'src/environments/environment';

// Services

import { DriverService } from './shared/driver.service';

// Print
import { NgxPrintModule } from 'ngx-print';

// Components

import { AppComponent } from './app.component';
import { FlagsComponent } from './flags/flags.component';
import { SecondaryFormComponent } from './secondary-form/secondary-form.component';
import { DriverListComponent } from './secondary-form/driver-list/driver-list.component';
import { DriverComponent } from './secondary-form/driver/driver.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { QuizIntroComponent } from './quiz-intro/quiz-intro.component';
import { MainFormComponent } from './main-form/main-form.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';

// Routing

import { AppRoutingModule } from './app-routing.module';

// Translations

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    FlagsComponent,
    SecondaryFormComponent,
    DriverListComponent,
    DriverComponent,
    DragDropComponent,
    QuizComponent,
    ResultComponent,
    QuizIntroComponent,
    MainFormComponent,
    PrintLayoutComponent,
    AdminLoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatStepperModule,
    MatToolbarModule,
    DragDropModule,
    HttpClientModule,
    NgxPrintModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [DriverService],
  bootstrap: [AppComponent]
})
export class AppModule {}
