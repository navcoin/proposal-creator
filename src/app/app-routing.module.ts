import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProposalComponent} from './proposal/proposal.component';


const routes: Routes = [

  {
    path: '', redirectTo: '/proposal/create', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

