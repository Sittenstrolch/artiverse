'use strict'
import {Component, OnInit, Input} from 'angular2/core';
import {Post} from './model/post'
import {Image} from './model/image'

import {PostInteraction} from './services/post-interaction.service';

@Component({
  selector: 'add-post',
  providers: [PostInteraction],
  directives: [],
  template: `
    <modal>
      <span>Hallo</span>
    </modal>
  `
})

export class AddPost implements OnInit{

  constructor(private _postInteraction:PostInteraction){}

  ngOnInit() {
  }

}
