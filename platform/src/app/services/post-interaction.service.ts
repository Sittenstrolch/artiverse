import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Artist} from '../model/artist'
import {Post} from '../model/post'
import {Observable} from 'rxjs/Observable';


@Injectable()
export class PostInteraction {

  constructor(private _http:Http){}

  like(postId:string){
    // return this._http.get('/api/newTracks')
      // .subscribe(
      //   data => console.log(data),
      //   err => console.log(err),
      //   () => console.log('Authentication Complete')
      // );
    return new Promise((resolve, reject) => {

      resolve()
    });
  }


}
