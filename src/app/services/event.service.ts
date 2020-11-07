import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Event } from '../interfaces/event';
import { JoinedEvents } from '../interfaces/joined-events';

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
}
