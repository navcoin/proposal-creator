import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {ProposalModule} from './proposal/proposal.module';

import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { PaymentRequestModule } from './payment-request/payment-request.module';
import { MatButtonToggleModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,

    AppRoutingModule,
    ProposalModule,
    PaymentRequestModule,

    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
