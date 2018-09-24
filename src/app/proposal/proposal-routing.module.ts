import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateProposalComponent} from './create-proposal/create-proposal.component';

const routes: Routes = [

  {path: 'create', component: CreateProposalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProposalRoutingModule { }
