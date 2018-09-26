import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {ProposalModule} from './proposal/proposal.module';
import { PaymentRequestModule } from './payment-request/payment-request.module';
import { PiModule } from './pi/pi.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,

    AppRoutingModule,
    ProposalModule,
    PaymentRequestModule,
    PiModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
