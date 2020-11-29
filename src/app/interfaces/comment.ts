import * as firebase from 'firebase';
import { User } from './user';

export interface Comment {
  uid: string;
  createdAt: firebase.default.firestore.Timestamp;
  commentBody: string;
  imageURL: string;
  imageId: string;
  commentId: string;
  eventId: string;
}

export interface CommentWithUser extends Comment {
  user: User;
}
