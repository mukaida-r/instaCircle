import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Event } from '../interfaces/event';
import { Password } from '../interfaces/password';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  eventId: string;
  event$: Observable<Event>;
  constructor(private db: AngularFirestore) {
    this.event$ = this.getEvent(this.eventId);
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

  getEvent(id: string): Observable<Event> {
    return this.db.doc<Event>(`events/${id}`).valueChanges();
  }
}
