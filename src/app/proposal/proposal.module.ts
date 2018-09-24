import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {ProposalRoutingModule} from './proposal-routing.module';
import {ProposalComponent} from './proposal.component';
import {CreateProposalComponent} from './create-proposal/create-proposal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    ProposalRoutingModule
  ],
  declarations: [ProposalComponent, CreateProposalComponent]
})
export class ProposalModule { }
