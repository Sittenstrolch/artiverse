import {Post} from './post'
import {Image} from './image'

export interface Artist {
  id: string;
  name: string;
  titleImage: Image;
  profileImage: Image;
  city: string;
  country: string;
  email: string;
  profession: string;
  aboutMe: string;
  follower: number;
  following: string[];
}
