import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Event } from 'src/app/interfaces/event';
import { CreateEventDialogComponent } from './create-event-dialog/create-event-dialog.component';
import { JoinEventDialogComponent } from './join-event-dialog/join-event-dialog.component';

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
  };
  eventJoinedLength = 5;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openJoinEventDialog() {
    this.dialog.open(JoinEventDialogComponent, {
      maxWidth: '100vw',
      minWidth: '50%',
      autoFocus: false,
      restoreFocus: false,
    });
  }

  openCreateEventDialog() {
    this.dialog.open(CreateEventDialogComponent, {
      maxWidth: '100vw',
      minWidth: '50%',
      autoFocus: false,
      restoreFocus: false,
    });
  }
}
