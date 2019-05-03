import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlagsComponent } from './flags/flags.component';
import { SafetyComponent } from './safety/safety.component';
import { TransportNumberComponent } from './transport-number/transport-number.component';
import { ArrivalDepartureComponent } from './arrival-departure/arrival-departure.component';
import { ArrivalComponent } from './arrival/arrival.component';
import { DepartureComponent } from './departure/departure.component';
import { PrintComponent } from './print/print.component';
import { SecondaryFormComponent } from './secondary-form/secondary-form.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

const routes: Routes = [
  { path: '', component: FlagsComponent },
  { path: 'flags', component: FlagsComponent },
  { path: 'safety-rules', component: SafetyComponent },
  { path: 'transport-number', component: TransportNumberComponent },
  { path: 'arrival-departure', component: ArrivalDepartureComponent },
  { path: 'arrival', component: ArrivalComponent },
  { path: 'departure', component: DepartureComponent },
  { path: 'print', component: PrintComponent },
  { path: 'drivers-register', component: SecondaryFormComponent },
  { path: 'workplace-safety', component: DragDropComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
