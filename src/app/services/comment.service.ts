import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { AuthService } from './auth.service';
import * as firebase from 'firebase';
import { Event } from '../interfaces/event';
import { Image } from '../interfaces/image';
import { UserService } from './user.service';
import { User } from '../interfaces/user';
import { Comment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private db: AngularFirestore, private authService: AuthService) {}

  createComment(user: User, event: Event, image: Image, comment: Comment) {
    const id: string = this.db.createId();
    return this.db
      .doc<Comment>(
        `events/${event.eventId}/images/${image.imageId}/comments/${id}`
      )
      .set({
        userName: user.name,
        uid: user.uid,
        commentBody: comment.commentBody,
        imageURL: comment.imageURL,
        avatarURL: user.avatarURL,
        id,
        eventId: event.eventId,
        createdAt: firebase.default.firestore.Timestamp.now(),
      });
  }
}
