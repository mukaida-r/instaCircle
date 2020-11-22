import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Image } from '../interfaces/image';
import { Comment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private db: AngularFirestore) {}

  createComment(
    image: Image,
    comment: Omit<
      Comment,
      'uid' | 'imageId' | 'createdAt' | 'imageURL' | 'id' | 'eventId'
    >
  ): Promise<void> {
    const id: string = this.db.createId();
    return this.db
      .doc<Comment>(
        `events/${image.eventId}/images/${image.imageId}/comments/${id}`
      )
      .set({
        ...comment,
        uid: image.uid,
        imageId: image.imageId,
        imageURL: image.imageURL,
        id,
        eventId: image.eventId,
        createdAt: firebase.default.firestore.Timestamp.now(),
      });
  }
}
