import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { Event } from '../interfaces/event';
import { JoinedEvents } from '../interfaces/joined-events';
import { Password } from '../interfaces/password';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage,
    private fns: AngularFireFunctions,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  getMyOwnedEvents(uid: string): Observable<Event[]> {
    return this.db
      .collectionGroup<Event>('events', (ref) =>
        ref.where('ownerId', '==', uid)
      )
      .valueChanges();
  }

  getJoinedEventsData(uid: string) {
    return this.db
      .collection<JoinedEvents>(`users/${uid}/joinedEvents`)
      .valueChanges();
  }

  async createEvent(
    event: Omit<Event, 'eventId'>,
    password: string
  ): Promise<void> {
    const id = this.db.createId();
    await this.db
      .doc<Event>(`events/${id}`)
      .set({
        eventId: id,
        ...event,
      })
      .then(() => {
        this.router.navigateByUrl(`event/${id}`);
      });
    await this.db.doc<Password>(`private/${id}`).set({
      eventId: id,
      password,
    });
  }

  async setThumbnailToStorage(eventId: string, file: string): Promise<string> {
    const resule = await this.storage
      .ref(`events/${eventId}`)
      .putString(file, firebase.default.storage.StringFormat.DATA_URL);
    return resule.ref.getDownloadURL();
  }

  async updateEvent(
    event: Omit<Event, 'eventId' | 'ownerId' | 'createAt'>,
    eventId: string
  ): Promise<void> {
    return this.db
      .doc(`events/${eventId}`)
      .set(event, { merge: true })
      .then(() => {
        this.snackBar.open('イベント情報を更新しました。');
        this.router.navigateByUrl(`event/${eventId}`);
      })
      .catch(() => {
        this.snackBar.open('更新できませんでした。');
      });
  }

  deleteEvent(eventId: string) {
    // TODO: イベント削除機能実装
    this.router.navigateByUrl('/');
  }

  getEvent(id: string): Observable<Event> {
    return this.db.doc<Event>(`events/${id}`).valueChanges();
  }

  judgePassword(password: string, eventId: string) {
    console.log(eventId);
    console.log(password);

    const func = this.fns.httpsCallable('judgementPassword');
    return func({ password, eventId }).toPromise();
  }
}
