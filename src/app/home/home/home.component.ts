import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/interfaces/event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  event: Omit<Event, 'createAt'> = {
    eventId: 'id',
    title: 'title',
    discliption: 'description',
    thumbnailURL:
      'https://pbs.twimg.com/profile_images/583053177223680000/DN4bVy5B_400x400.jpg',
    ownerId: 'ownerId',
    password: '',
  };
  eventJoinedLength = 5;

  constructor() {}

  ngOnInit(): void {}
}
