import {Image} from './image'

export interface Post {
  id: string;
  text: string;
  likes: number;
  liked: boolean;
  images: Image[];
  date: number
}
