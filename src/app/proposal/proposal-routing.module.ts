import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateProposalComponent} from './create-proposal/create-proposal.component';
import {VoteProposalComponent} from './vote-proposal/vote-proposal.component';
import {ProposalComponent} from './proposal.component';

const routes: Routes = [

  {
    path: 'proposal',
    component: ProposalComponent,

    children: [
      {
        path: 'create',
        component: CreateProposalComponent
      },
      {
        path: 'vote',
        component: VoteProposalComponent
      },
    ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProposalRoutingModule { }
