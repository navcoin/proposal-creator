import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {ProposalRoutingModule} from './proposal-routing.module';
import {ProposalComponent} from './proposal.component';
import {CreateProposalComponent} from './create-proposal/create-proposal.component';
import {MatButtonModule, MatCardModule, MatInputModule, MatSelectModule, MatButtonToggleModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {VoteProposalComponent} from './vote-proposal/vote-proposal.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';

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
    MatButtonToggleModule

  ],
  declarations: [
    ProposalComponent,
    CreateProposalComponent,
    VoteProposalComponent,
    NavigationMenuComponent,

    
  ]
})
export class ProposalModule { }
