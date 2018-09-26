import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {PaymentRequestRoutingModule} from './payment-request-routing.module';
import {PaymentRequestComponent} from './payment-request.component';
import {CreatePaymentRequestComponent} from './create-payment-request/create-payment-request.component';
import {MatButtonModule, MatCardModule, MatInputModule, MatSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {VotePaymentRequestComponent} from './vote-payment-request/vote-payment-request.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    PaymentRequestRoutingModule,

    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
  ],
  declarations: [
    PaymentRequestComponent,
    CreatePaymentRequestComponent,
    VotePaymentRequestComponent
  ]
})
export class PaymentRequestModule { }
