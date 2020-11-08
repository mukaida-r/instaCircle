import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Event } from 'src/app/interfaces/event';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  uid: string;
  event$: Observable<Event>;

  constructor(
    private route: ActivatedRoute,
    private eventServise: EventService,
    private authServise: AuthService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.event$ = this.eventServise.getEvent(params.get('eventId'));
    });
    this.authServise.user$.subscribe((user) => {
      this.uid = user.uid;
    });
  }

  ngOnInit(): void {}
}
