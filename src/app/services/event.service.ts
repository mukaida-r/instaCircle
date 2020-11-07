import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Event } from '../interfaces/event';
import { Password } from '../interfaces/password';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private db: AngularFirestore) {}

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
}
