import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/app/interfaces/event';

@Component({
  selector: 'app-event-list-card',
  templateUrl: './event-list-card.component.html',
  styleUrls: ['./event-list-card.component.scss'],
})
export class EventListCardComponent implements OnInit {
  @Input() event: Event;
  @Input() eventJoinedLength: number;

  constructor() {}

  ngOnInit(): void {}
}
