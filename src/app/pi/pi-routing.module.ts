import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PiComponent } from './pi.component';
import { ProposalComponent } from '../proposal/proposal.component';
import { CreateProposalComponent } from '../proposal/create-proposal/create-proposal.component';
import { VoteProposalComponent } from '../proposal/vote-proposal/vote-proposal.component';
import { CreatePaymentRequestComponent } from '../payment-request/create-payment-request/create-payment-request.component';
import { VotePaymentRequestComponent } from '../payment-request/vote-payment-request/vote-payment-request.component';

const routes: Routes = [
  {
    path: 'pi',
    component: PiComponent,

    children: [ 
      {
        path: 'proposal/create', component: CreateProposalComponent
      },
      {
        path: 'proposal/vote', component: VoteProposalComponent
      },
      {
        path: 'payment-request/create', component: CreatePaymentRequestComponent
      },
      {
        path: 'payment-request/vote', component: VotePaymentRequestComponent
      },
    ]
    

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PiRoutingModule { }

