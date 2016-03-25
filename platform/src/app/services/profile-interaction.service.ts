import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Artist} from '../model/artist'
import {Post} from '../model/post'
import {Observable} from 'rxjs/Observable';

import {SelfProvider} from './self.service';

@Injectable()
export class ProfileInteraction {

  constructor(
    private _http:Http,
    private _selfProvider:SelfProvider){}

  follow(artistId:string){
    // return this._http.get('/api/newTracks')
      // .subscribe(
      //   data => console.log(data),
      //   err => console.log(err),
      //   () => console.log('Authentication Complete')
      // );
    return new Promise((resolve, reject) => {
    this._selfProvider.toggleFollow(artistId)
      resolve()
    });
  }

  unfollow(artistId:string){
    // return this._http.get('/api/newTracks')
      // .subscribe(
      //   data => console.log(data),
      //   err => console.log(err),
      //   () => console.log('Authentication Complete')
      // );
    return new Promise((resolve, reject) => {
      this._selfProvider.toggleFollow(artistId)
      resolve()
    });
  }


}
