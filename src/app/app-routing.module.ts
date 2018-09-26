import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProposalComponent} from './proposal/proposal.component';
import {PaymentRequestComponent} from './payment-request/payment-request.component';


const routes: Routes = [

  {
    // resolve service. 
    path: '', redirectTo: '/proposal/create', pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

