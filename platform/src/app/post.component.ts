'use strict'
import {Component, OnInit, Input, OnDestroy, Renderer} from 'angular2/core';
import {Artist} from './model/artist'
import {Post} from './model/post'
import {Image} from './model/image'
import {Gallery} from './gallery.component';

import {SanitizeHtml} from './pipes/sanitize-html.pipe';

import {PostInteraction} from './services/post-interaction.service';

@Component({
  selector: 'post',
  providers: [PostInteraction],
  directives: [Gallery],
  template: `
    <div class="post">
      <div class="post-header">
        <div class="post-profile-image-wrapper">
          <img [src]="artist.profileImage.normal"/>
        </div>
        <div class="post-general-info">
          <div>{{artist.name}}</div>
          <div class="post-date">{{post.date | date}}</div>
        </div>
      </div>

      <div class="post-content">
        <div class="post-text" [innerHTML]="post.text | sanitize:['b','i']"></div>
        <div class="post-images" *ngIf="post.images.length > 0">
          <div class="post-title-image post-image-wrapper" (click)="openGallery(0)">
            <div class="hover-indicator"></div>
            <img [src]="post.images[0].thumb"/>
          </div>
          <div class="other-images">
            <div class="post-image post-image-wrapper" *ngFor="#image of post.images; #i = index" (click)="openGallery(i)">
              <div class="hover-indicator"></div>
              <img [src]="image.thumb" *ngIf="i != 0 && i < 4"/>
            </div>
            <div class="other-indicator post-image-wrapper" *ngIf="post.images.length > 4" (click)="openGallery(4)">
              <div class="hover-indicator"></div>
              <span> + {{post.images.length - 3}} others </span>
            </div>
          </div>

        </div>
      </div>

      <div class="post-footer">
        <i class="fa like-button" (click)="likePost()" [class.fa-heart]="post.liked" [class.fa-heart-o]="!post.liked"></i>
        <span class="likes" *ngIf="post.likes > 0">{{post.likes}} Likes</span>
        <span class="likes" *ngIf="post.likes === 0">Be the first to like it</span>
      </div>
    </div>
    <gallery [images]="post.images" [startindex]="selectedImage" [artist]="artist" [(open)]="galleryOpen" [releaser]="releaseListener"></gallery>
  `,
  pipes: [SanitizeHtml]
})

export class PostComponent implements OnInit, OnDestroy{
  @Input() post:Post
  @Input() artist:Artist
  public liked:boolean = false
  public selectedImage:number = 0
  public galleryOpen = false
  public releaseListener = null

  constructor(
    private _renderer:Renderer,
    private _postInteraction:PostInteraction){}

  ngOnInit() {
  }

  likePost(){
    this._postInteraction.like(this.post.id)
      .then( () => {
          if(this.post.liked)
            this.post.likes = this.post.likes - 1
          else
            this.post.likes = this.post.likes + 1
          this.post.liked = !this.post.liked
      })
      .catch( () => {

      })
  }

  openGallery(index){
    document.body.style.overflow = "hidden"

    this.releaseListener = this._renderer.listenGlobal('body', 'touchmove', (event) => {
        console.log(event);
        if (event.target.classList.contains('prevent-scrollable')) {
          event.preventDefault();
        }
    });

    this.selectedImage = index
    this.galleryOpen = !this.galleryOpen
  }

  ngOnDestroy() {
   // Removes the event listener
   if(this.releaseListener)
     this.releaseListener()
  }

}
