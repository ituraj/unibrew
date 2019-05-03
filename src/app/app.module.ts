import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Environments

import { environment } from 'src/environments/environment';

// Services

import { DriverService } from './shared/driver.service';

// Components

import { AppComponent } from './app.component';
import { FlagsComponent } from './flags/flags.component';
import { SafetyComponent } from './safety/safety.component';
import { TransportNumberComponent } from './transport-number/transport-number.component';
import { ArrivalDepartureComponent } from './arrival-departure/arrival-departure.component';
import { ArrivalComponent } from './arrival/arrival.component';
import { DepartureComponent } from './departure/departure.component';
import { PrintComponent } from './print/print.component';
import { FlagComponent } from './flag/flag.component';
import { SecondaryFormComponent } from './secondary-form/secondary-form.component';
import { DriverListComponent } from './secondary-form/driver-list/driver-list.component';
import { DriverComponent } from './secondary-form/driver/driver.component';

// Routing

import { AppRoutingModule } from './app-routing.module';

// Animations

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatCardModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';

// Font Awesome

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Translations

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DragDropComponent } from './drag-drop/drag-drop.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    FlagsComponent,
    SafetyComponent,
    TransportNumberComponent,
    ArrivalDepartureComponent,
    ArrivalComponent,
    DepartureComponent,
    PrintComponent,
    FlagComponent,
    SecondaryFormComponent,
    DriverListComponent,
    DriverComponent,
    DragDropComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatCardModule,
    DragDropModule,
    FontAwesomeModule,
    HttpClientModule,
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
