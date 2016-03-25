'use strict'
import {Component, OnInit} from 'angular2/core';
import {Artist} from './model/artist'
import {Post} from './model/post'
import {ProfileProvider} from './services/profile-provider.service';
import {PostComponent} from './post.component';
import {AddPost} from './add-post.component';
import {SanitizeHtml} from './pipes/sanitize-html.pipe';
import {ProfileInteraction} from './services/profile-interaction.service';
import {SelfProvider} from './services/self.service';

import {RouteParams, Router} from 'angular2/router';

@Component({
  selector: 'profile',
  providers: [ProfileProvider, ProfileInteraction, SelfProvider],
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
        <div class="artist-name">
          <span>{{artist.name}}</span>
        </div>
        <div class="follower">
          <div class="follow-btn" (click)="toggleFollow()" [class.following]="following">
            <span *ngIf="!following">Follow</span>
            <span *ngIf="following">Following</span>
          </div>
          <span>{{artist.follower}} Follower</span>
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
  public self:Artist = null
  public artist = null
  public following = false
  public posts = []
  public detailsVisible:boolean = false

  constructor(
    private _router:Router,
    private _routeParams:RouteParams,
    private _profileInteraction:ProfileInteraction,
    private _profileProvider:ProfileProvider,
    private _selfProvider:SelfProvider){}

  ngOnInit() {
    console.log("Hello")
    let id = this._routeParams.get('profileid');
    console.log(id)
    this._profileProvider.getProfile(id)
      .then( artist => {
        this.artist = artist

        this._selfProvider.profile()
          .then( self => {
            this.self = self
            if(this.artist.id !== this.self.id && this.self.following.indexOf(this.artist.id) > -1){
              this.following = true
            }
          })
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

  toggleFollow(){
    if(this.following){
      this._profileInteraction.unfollow(this.artist.id)
        .then( () => {
          this.artist.follower -= 1
          this.following = !this.following
        })
        .catch( err => {
          console.log("reject", err)
        })
    }else{
      this._profileInteraction.follow(this.artist.id)
        .then( () => {
          this.artist.follower += 1
          this.following = !this.following
        })
        .catch( err => {
          console.log("reject", err)
        })
    }

  }

}
