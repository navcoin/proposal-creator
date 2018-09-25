import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProposalModule} from './proposal/proposal.module';


const routes: Routes = [
  {
    path: 'proposal',
    component: ProposalModule
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

