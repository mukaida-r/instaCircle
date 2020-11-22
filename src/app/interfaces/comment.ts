import * as firebase from 'firebase';

export interface Comment {
  uid: string;
  createdAt: firebase.default.firestore.Timestamp;
  commentBody: string;
  imageURL: string;
  imageId: string;
  id: string;
  eventId: string;
}
