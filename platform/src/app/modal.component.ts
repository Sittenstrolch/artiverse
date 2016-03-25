'use strict'
import {Component, OnInit, Input} from 'angular2/core';

@Component({
  selector: 'modal',
  providers: [],
  directives: [],
  template: `
    <div class="modal">
    </div>
  `
})

export class Modal implements OnInit{
  // @Input() post:Post
  // @Input() artist:Artist

  constructor(){}

  ngOnInit() {
  }

}
