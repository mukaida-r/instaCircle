import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  ActivatedRoute,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Event } from '../interfaces/event';

@Injectable({
  providedIn: 'root',
})
export class InvitationGuard implements CanActivate {
  constructor(
    private db: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
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
