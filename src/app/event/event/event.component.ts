import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Event } from 'src/app/interfaces/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  event$: Observable<Event>;

  constructor(
    private route: ActivatedRoute,
    private eventServise: EventService
  ) {
    route.paramMap.subscribe((params) => {
      this.event$ = this.eventServise.getEvent(params.get('eventId'));
    });
  }

  ngOnInit(): void {}
}
