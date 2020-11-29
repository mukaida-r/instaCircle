import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Image } from '../interfaces/image';
import { Comment, CommentWithUser } from '../interfaces/comment';
import { Observable, of, combineLatest } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { UserService } from './user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(
    private db: AngularFirestore,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private authService: AuthService
  ) {}

  createComment(
    image: Image,
    comment: Omit<
      Comment,
      'uid' | 'imageId' | 'createdAt' | 'imageURL' | 'commentId' | 'eventId'
    >
  ): Promise<void> {
    const commentId: string = this.db.createId();
    return this.db
      .doc<Comment>(
        `events/${image.eventId}/images/${image.imageId}/comments/${commentId}`
      )
      .set({
        ...comment,
        uid: this.authService.uid,
        imageId: image.imageId,
        imageURL: image.imageURL,
        commentId,
        eventId: image.eventId,
        createdAt: firebase.default.firestore.Timestamp.now(),
      });
  }

  getComment(eventId: string, imageId: string): Observable<Comment[]> {
    return this.db
      .collection<Comment>(`events/${eventId}/images/${imageId}/comments`)
      .valueChanges();
  }

  getCommentsWithUser(
    eventId: string,
    imageId: string
  ): Observable<CommentWithUser[]> {
    if (imageId === undefined) {
      return of(null);
    } else {
      return this.db
        .collection<Comment>(
          `events/${eventId}/images/${imageId}/comments`,
          (ref) => ref.orderBy('createdAt', 'desc')
        )
        .valueChanges()
        .pipe(
          switchMap((comments: Comment[]) => {
            if (comments.length) {
              const unduplicatedUids: string[] = Array.from(
                new Set(comments.map((comment) => comment.uid))
              );

              const users$: Observable<User[]> = combineLatest(
                unduplicatedUids.map((uid) => this.userService.getUserData(uid))
              );
              return combineLatest([of(comments), users$]);
            } else {
              return of([]);
            }
          }),
          map(([comments, users]) => {
            if (comments?.length) {
              return comments.map((comment: Comment) => {
                return {
                  ...comment,
                  user: users.find((user: User) => comment.uid === user?.uid),
                };
              });
            } else {
              return [];
            }
          })
        );
    }
  }

  deleteComment(
    eventId: string,
    imageId: string,
    commentId: string
  ): Promise<void> {
    return this.db
      .doc<Comment>(`events/${eventId}/images/${imageId}/comments/${commentId}`)
      .delete()
      .then(() => {
        this.snackBar.open('削除しました');
      });
  }
}
