import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreatePaymentRequestComponent} from './create-payment-request/create-payment-request.component';
import {VotePaymentRequestComponent} from './vote-payment-request/vote-payment-request.component';
import {PaymentRequestComponent} from './payment-request.component';

const routes: Routes = [

  {
    path: 'payment-request',
    component: PaymentRequestComponent,

    children: [
      {
        path: 'create',
        component: CreatePaymentRequestComponent
      },
      {
        path: 'vote',
        component: VotePaymentRequestComponent
      },
    ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRequestRoutingModule { }
