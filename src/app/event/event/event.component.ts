import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Event } from 'src/app/interfaces/event';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  uid: string;
  event$: Observable<Event>;
  eventId: string;
  eventInvitateURL = location.href;
  ownerId: string;
  ownerAvatarURL: string;

  constructor(
    private route: ActivatedRoute,
    private eventServise: EventService,
    private authServise: AuthService,
    private userService: UserService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.eventId = params.get('eventId');
      this.event$ = this.eventServise.getEvent(this.eventId);
      this.event$.subscribe((event) => {
        this.ownerId = event.ownerId;
        this.getUserAvatarURL(this.ownerId);
      });
    });
    this.authServise.user$.subscribe((user) => {
      this.uid = user.uid;
    });
  }

  ngOnInit(): void {}

  getUserAvatarURL(uid: string) {
    this.userService.getUserData(uid).subscribe((user) => {
      this.ownerAvatarURL = user.avatarURL;
    });
  }
}
