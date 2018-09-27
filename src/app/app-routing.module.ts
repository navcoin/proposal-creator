import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {
    path: 'pi', redirectTo: '/pi/proposal/create', pathMatch: 'full',
  },
  {
    path: '', redirectTo: '/proposal/create', pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

