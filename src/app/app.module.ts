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

// Translations

import { HttpClient, HttpClientModule } from '@angular/common/http';
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
    SafetyComponent,
    TransportNumberComponent,
    ArrivalDepartureComponent,
    ArrivalComponent,
    DepartureComponent,
    PrintComponent,
    FlagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
