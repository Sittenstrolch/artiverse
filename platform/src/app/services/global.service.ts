import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Artist} from './artist'
import {Post} from './post'
import {Observable} from 'rxjs/Observable';


@Injectable()
export class GlobalMap {
  public enableScrolling : Boolean = true

}
