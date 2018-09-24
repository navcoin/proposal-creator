import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProposalModule} from './proposal/proposal.module';



const routes: Routes = [
  {
    path: 'proposal',
    loadChildren: () => ProposalModule
  },
  {
    path: '', redirectTo: '/proposal', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

