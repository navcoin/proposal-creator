import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  routes: Array<Object>;
  route: ActivatedRoute;

  constructor() {
   }

  ngOnInit() {
    this.route = new ActivatedRoute();

    this.routes = [
      {
        name: 'Create CF Proposal',
        route: 'pi/proposal/create'
      },
      {
        name: 'Vote on CF Proposal',
        route: 'pi/proposal/vote'
      },
      {
        name: 'Create CF Payment Request',
        route: 'pi/payment-request/create'
      },
      {
        name: 'Vote on CF Payment Request',
        route: 'pi/payment-request/vote'
      },
    ]
  }
}
