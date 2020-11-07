import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event } from 'src/app/interfaces/event';
import { CreateEventDialogComponent } from './create-event-dialog/create-event-dialog.component';
import { JoinEventDialogComponent } from './join-event-dialog/join-event-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  eventId$: Observable<string> = this.route.paramMap.pipe(
    map((param) => {
      return param.get('id');
    })
  );
  event: Omit<Event, 'createAt'> = {
    eventId: 'id',
    title: 'title',
    discliption: 'description',
    thumbnailURL:
      'https://pbs.twimg.com/profile_images/583053177223680000/DN4bVy5B_400x400.jpg',
    ownerId: 'ownerId',
  };
  eventJoinedLength = 5;

  constructor(private dialog: MatDialog, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.eventId$.subscribe((id) => {
      if (id) {
        this.openJoinEventDialog(id);
      }
    });
  }

  openJoinEventDialog(id?: string) {
    this.dialog.open(JoinEventDialogComponent, {
      maxWidth: '100vw',
      minWidth: '50%',
      autoFocus: false,
      restoreFocus: false,
      data: { id },
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
