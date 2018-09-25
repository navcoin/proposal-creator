import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {ProposalRoutingModule} from './proposal-routing.module';
import {ProposalComponent} from './proposal.component';
import {CreateProposalComponent} from './create-proposal/create-proposal.component';
import {MatButtonModule, MatCardModule, MatInputModule, MatSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,


    ProposalRoutingModule,

    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
  ],
  declarations: [
    ProposalComponent, CreateProposalComponent
  ]
})
export class ProposalModule { }
