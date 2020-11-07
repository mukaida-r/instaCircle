import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Event } from '../interfaces/event';
import { JoinedEvents } from '../interfaces/joined-events';
import { Password } from '../interfaces/password';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private db: AngularFirestore) {}

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
    await this.db.doc<Event>(`events/${id}`).set({
      eventId: id,
      ...event,
    });
    await this.db.doc<Password>(`private/${id}`).set({
      eventId: id,
      password,
    });
  }

  getEvent(id: string): Observable<any> {
    return this.db.doc(`events/${id}`).valueChanges();
  }
}
