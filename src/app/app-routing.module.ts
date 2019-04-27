import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlagsComponent } from './flags/flags.component';
import { SafetyComponent } from './safety/safety.component';
import { TransportNumberComponent } from './transport-number/transport-number.component';
import { ArrivalDepartureComponent } from './arrival-departure/arrival-departure.component';
import { ArrivalComponent } from './arrival/arrival.component';
import { DepartureComponent } from './departure/departure.component';
import { PrintComponent } from './print/print.component';

const routes: Routes = [
  { path: '', component: FlagsComponent },
  { path: 'flags', component: FlagsComponent },
  { path: 'step-one', component: SafetyComponent },
  { path: 'step-two', component: TransportNumberComponent },
  { path: 'step-three', component: ArrivalDepartureComponent },
  { path: 'step-four-a', component: ArrivalComponent },
  { path: 'step-four-b', component: DepartureComponent },
  { path: 'step-five', component: PrintComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
