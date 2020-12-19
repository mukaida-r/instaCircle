import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  ActivatedRoute,
} from '@angular/router';
import { Event } from '../interfaces/event';

@Injectable({
  providedIn: 'root',
})
export class InvitationGuard implements CanActivate {
  constructor(private db: AngularFirestore, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot): Promise<boolean> {
    const eventId = next.paramMap.get('id');
    console.log(eventId);
    const eventDoc = this.db.doc<Event>(`events/${eventId}`).get();
    return eventDoc.toPromise().then((event) => {
      console.log(eventId);
      if (event.exists) {
        return true;
      } else {
        setTimeout(() => {
          this.router.navigateByUrl('/404');
        }, 1000);
      }
    });
  }
}
