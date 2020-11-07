import { Data } from '@angular/router';

export interface Image {
  imageId: string;
  uid: string;
  imageURL: string;
  eventId: string;
  createAt: Data;
  likedUid: string;
  LikedCount: string;
  comment: string;
}
