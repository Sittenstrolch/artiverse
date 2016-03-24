import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Artist} from './model/artist';
import {Image} from './model/image';
import {Post} from './model/post';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ProfileProvider {

  constructor(private _http:Http){}

  getProfile(profileId:string){
    // return this._http.get('/api/newTracks')
      // .subscribe(
      //   data => console.log(data),
      //   err => console.log(err),
      //   () => console.log('Authentication Complete')
      // );
    return new Promise((resolve, reject) => {
      let painter:Artist = {
        name: 'Markus Petrykowski',
        titleImage: {normal:'https://static.pexels.com/photos/2324/skyline-buildings-new-york-skyscrapers.jpg', thumb: ''},
        profileImage: {normal: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRW2PffJuhKgi0dEH3Kli0uO2knpx4e-aEQfGsTwhxnKx-XL82Eyw', thumb: ''},
        city: 'Berlin',
        country: 'GER',
        email: "contact@markus-petrykowski.de",
        profession: 'Photographer',
        aboutMe: `Lorem ipsum dolor sit amet, <b>consetetur</b> sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.

Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.

At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.

Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.

Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo`
      }
      resolve(painter)
    });
  }

  getPosts(profileId:string){
    return new Promise((resolve, reject) => {
      let posts:Post[] = [
          {
            id: "id123456",
            text: "Awesome Post < html value='really bad'> <b>This is the headline</b>",
            likes: 0,
            liked: false,
            images: [
              {thumb: 'https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2d/f2/new-york-city.jpg', normal:'https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2d/f2/new-york-city.jpg'},
              {thumb: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRA8J4K3eyAvzWI_88L0EpP--KOC2mtLuwkklAFSlhJYFfzUITWvQ', normal:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRA8J4K3eyAvzWI_88L0EpP--KOC2mtLuwkklAFSlhJYFfzUITWvQ'},
              {thumb: 'http://10767-presscdn-0-65.pagely.netdna-cdn.com/wp-content/uploads/2014/09/The-Flatiron-Building-New-York.jpg', normal:'http://10767-presscdn-0-65.pagely.netdna-cdn.com/wp-content/uploads/2014/09/The-Flatiron-Building-New-York.jpg'},
              {thumb: 'http://10767-presscdn-0-65.pagely.netdna-cdn.com/wp-content/uploads/2014/09/The-HIgh-Line-urban-public-park.jpg', normal:'http://10767-presscdn-0-65.pagely.netdna-cdn.com/wp-content/uploads/2014/09/The-HIgh-Line-urban-public-park.jpg'},
              {thumb: 'http://10767-presscdn-0-65.pagely.netdna-cdn.com/wp-content/uploads/2014/09/Entrance-to-The-Standard-Grill-NY.jpg', normal:'http://10767-presscdn-0-65.pagely.netdna-cdn.com/wp-content/uploads/2014/09/Entrance-to-The-Standard-Grill-NY.jpg'}
            ],
            date: 1458593001806
          },
          {
            id: "id123456",
            text: "Awesome Post < html value='really bad'> <b>This is the headline</b>",
            likes: 0,
            liked: false,
            images: [
              {thumb: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRA8J4K3eyAvzWI_88L0EpP--KOC2mtLuwkklAFSlhJYFfzUITWvQ', normal:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRA8J4K3eyAvzWI_88L0EpP--KOC2mtLuwkklAFSlhJYFfzUITWvQ'}
            ],
            date: 1458593001806
          }
        ]

      resolve(posts)
    });
  }

}
