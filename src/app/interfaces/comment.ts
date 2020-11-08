import * as firebase from 'firebase';

export interface Comment {
  userName: string;
  uid: string;
  createdAt: firebase.default.firestore.Timestamp;
  commentBody: string;
  imageURL: string;
  avatarURL: string;
  id: string;
  eventId: string;
}
