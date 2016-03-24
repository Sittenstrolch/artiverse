'use strict'
import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {GlobalMap} from './services/global.service';

import {NavigationBar} from './navigation-bar.component';
import {Profile} from './profile.component';



@Component({
    selector: 'artiverse',
    providers: [HTTP_PROVIDERS, GlobalMap],
    directives: [Profile, NavigationBar, ROUTER_DIRECTIVES],
    template:`
        <navigation-bar></navigation-bar>
        <main>
          <router-outlet></router-outlet>
        </main>
    `
})
@RouteConfig([
  {path:'/profile/:profileid', name: 'Profile', component: Profile}
])

export class AppComponent implements OnInit {
  public loggedIn : Boolean = false;

  constructor(
    private _router:Router,
    public global:GlobalMap){}

  ngOnInit(){
  }

}
