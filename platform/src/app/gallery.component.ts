'use strict'
import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';
import {Artist} from './model/artist'
import {Post} from './model/post'
import {Image} from './model/image'

import {PostInteraction} from './services/post-interaction.service';

@Component({
  selector: 'gallery',
  providers: [],
  template: `
    <div class="gallery-wrapper"  [class.visible]="open">
      <div class="gallery prevent-scrollable" *ngIf="open" (click)="close($event)">
        <i class="fa fa-times close-gallery clickable" (click)="close($event)"></i>
        <div class="main-image-wrapper">
          <div class="height-adjuster">
            <div class="vertical-aligner prevent-scrollable" >
              <div class="image-navigation">

                <div class="gallery-nav-left gallery-nav clickable" (click)="previous($event)" *ngIf="startindex > 0">
                  <i class="fa fa-2x fa-chevron-left"></i>
                </div>
                <img class="prevent-scrollable" [src]="images[startindex].normal" (click)="stopProp($event)">
                <div class="gallery-nav-right gallery-nav clickable" (click)="next($event)"  *ngIf="startindex < images.length-1">
                  <i class="fa fa-2x fa-chevron-right"></i>
                </div>
                <!--<div class="image-author">
                  <div class="post-profile-image-wrapper">
                    <img [src]="artist.profileImage.normal"/>
                  </div>
                  <div class="author-name">
                    <div>{{artist.name}}</div>
                  </div>
                </div>-->
              </div>
            </div>
          </div>
        </div>


        <div class="gallery-footer">
          <div class="gallery-images-wrapper">

            <div class="gallery-images">
              <div class="preview-image-wrapper" *ngFor="#image of images; #i=index" (click)="select(i, $event)">
                <div class="hover-indicator"></div>
                <img [src]="image.thumb">
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  `
})

export class Gallery implements OnInit{
  @Input() images:Image[]
  @Input() artist:Artist
  @Input() startindex:number
  @Input() releaser:Function
  @Input() open:boolean
  @Output() openChange:EventEmitter<boolean> = new EventEmitter()

  ngOnInit(){

  }

  stopProp(event){
    event.stopPropagation()
    return false;
  }

  select(index, event){
    event.stopPropagation()
    this.startindex = index
  }

  close(event){
    console.log(event)
    document.body.style.overflow = "scroll"
    event.stopPropagation()
    this.releaser()
    this.open = false
    this.openChange.emit(false)
  }

  previous(event){
    event.stopPropagation()
    if(this.startindex > -1)
      this.startindex--
  }

  next(event){
    event.stopPropagation()
    if(this.startindex < this.images.length-1)
      this.startindex++
  }

}
