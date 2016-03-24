import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Artist} from '../model/artist'
import {Post} from '../model/post'
import {Observable} from 'rxjs/Observable';


@Injectable()
export class GlobalMap {
  public enableScrolling : Boolean = true

}
