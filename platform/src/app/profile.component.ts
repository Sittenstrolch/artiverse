'use strict'
import {Component, OnInit} from 'angular2/core';
import {Artist} from './model/artist'
import {Post} from './model/post'
import {ProfileProvider} from './services/profile-provider.service';
import {PostComponent} from './post.component';
import {SanitizeHtml} from './pipes/sanitize-html.pipe';

import {RouteParams, Router} from 'angular2/router';

@Component({
  selector: 'profile',
  providers: [ProfileProvider],
  directives: [PostComponent],
  template: `
    <div class="profile-header" *ngIf="artist">
      <div class="title-image image-wrapper">
        <img [src]="artist.titleImage.normal"/>
      </div>
      <div class="profile-image image-wrapper">
        <img [src]="artist.profileImage.normal"/>
      </div>
      <div id="title-sub-bar">
        <div class="left-bar">
          <span (click)="showDetails($event)" class="show-details clickable">About</span>
        </div>
        <div class="right-bar">
          <span *ngIf="artist.email" (click)="sendMail()" class="clickable">Contact</span>
        </div>
        <div class="profile-details" (click)="showDetails($event)"  [class.visible]="detailsVisible">
          <i class="fa fa-caret-up fa-3x clickable closing-caret" (click)="showDetails($event)"> </i>
          <div class="col-sm-6">
            <div class="artist-information">
              <table>
                <tbody>
                  <tr *ngFor="#attribute of artistAttr()" *ngIf="true">
                    <td class="table-key">{{attribute | uppercase}}</td>
                    <td class="table-value">{{artist[attribute]}}</td>
                  </tr>
                <tbody>
              </table>
            </div>
          </div>
          <div class="col-sm-6 about-me" [innerHTML]="artist.aboutMe | sanitize:['b','i','u']">
          </div>
        </div>
      </div>
      <div id="profile-info" *ngIf="artist">
        <div class="artistName">
          <span>{{artist.name}}</span>
        </div>
      </div>
      <div id="posts" *ngIf="posts">
        <post *ngFor="#post of posts" [post]="post" [artist]="artist"></post>
      </div>
    </div>
  `,
  pipes: [SanitizeHtml]
})

export class Profile implements OnInit{
  public artist = null
  public posts = []
  public detailsVisible:boolean = false

  constructor(
    private _router:Router,
    private _routeParams:RouteParams,
    private _profileProvider:ProfileProvider){}

  ngOnInit() {
    console.log("Hello")
    let id = this._routeParams.get('profileid');
    console.log(id)
    this._profileProvider.getProfile(id)
      .then( artist => {
        this.artist = artist
      })

    this._profileProvider.getPosts(id)
      .then( posts => {
        this.posts = posts
      })
    // this._service.getHero(id).then(hero => this.hero = hero);
  }

  artistAttr(){
    return Object.keys(this.artist).filter(function(item){
      return item === 'city' || item === 'country' || item === 'profession'
    })
  }

  showDetails(event){
    event.stopPropagation()
    this.detailsVisible = !this.detailsVisible
  }

  sendMail(){

  }

}
