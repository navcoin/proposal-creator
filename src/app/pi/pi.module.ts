import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PiRoutingModule } from './pi-routing.module';
import { PiComponent } from './pi.component';
import { RouterModule } from '@angular/router';
import { ProposalModule } from '../proposal/proposal.module';
import { PaymentRequestModule } from '../payment-request/payment-request.module';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { MatButtonToggleModule, MatCardModule } from '@angular/material';
import { InfoCardComponent } from './info-card/info-card.component';

@NgModule({
  imports: [
    CommonModule,
    PiRoutingModule,
    RouterModule,
    ProposalModule,
    PaymentRequestModule,
    MatButtonToggleModule,
    MatCardModule,

  ],
  declarations: [
    PiComponent,
    NavigationMenuComponent,
    InfoCardComponent
  ]
})
export class PiModule { }
