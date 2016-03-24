import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'navigation-bar',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <nav class="navbar navbar-default navbar-fixed-top navbar-inverse">

      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Artiverse</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a [routerLink]="['Profile', {profileid: 'profileabc'}]">Profile</a></li>
            <li><a href="#">Dashboard</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div>

    </nav>
  `,
  inputs: ['clientId', 'callbackUrl']
})

export class NavigationBar {
  public activeLink : string;

  constructor(
    private _router:Router){}

  goTo(){
    this._router.navigate( ['Profile', { profileid: 'profile-id123' }] );
  }

}
