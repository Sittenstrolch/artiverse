import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Artist} from '../model/artist';
import {Image} from '../model/image';
import {Post} from '../model/post';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class SelfProvider {
  public self:Artist = null

  constructor(private _http:Http){}

  profile(){
    return new Promise((resolve, reject) => {
      if(this.self){
        resolve(self)
      }else{
        let painter:Artist = {
          id: 'olip',
          name: 'Oliver Petrykowski',
          titleImage: {normal:'https://static.pexels.com/photos/2324/skyline-buildings-new-york-skyscrapers.jpg', thumb: ''},
          profileImage: {normal: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRW2PffJuhKgi0dEH3Kli0uO2knpx4e-aEQfGsTwhxnKx-XL82Eyw', thumb: ''},
          city: 'Berlin',
          country: 'GER',
          email: "contact@oliver-petrykowski.de",
          following: ['markuspetrykowski'],
          follower: 134,
          profession: 'Photographer',
          aboutMe: `Lorem ipsum dolor sit amet, <b>consetetur</b> sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Duis autem vel eum iriure dolor in facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo`
        }
        this.self = painter
        resolve(painter)
      }
    });
  }

  toggleFollow(artistId:string){
    console.log("toggleFollo")
    if(this.self){
      let index = this.self.following.indexOf(artistId)
      if(index > -1)
        this.self.following.splice(index, 1)
      else
        this.self.following.push(artistId)
    }
  }

}
