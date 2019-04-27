import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FlagsComponent } from './flags/flags.component';
import { SafetyComponent } from './safety/safety.component';
import { TransportNumberComponent } from './transport-number/transport-number.component';
import { ArrivalDepartureComponent } from './arrival-departure/arrival-departure.component';
import { ArrivalComponent } from './arrival/arrival.component';
import { DepartureComponent } from './departure/departure.component';
import { PrintComponent } from './print/print.component';
import { FlagComponent } from './flag/flag.component';
import { NavComponent } from './nav/nav.component';

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
    NavComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
