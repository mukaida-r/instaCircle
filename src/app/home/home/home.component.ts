import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateEventDialogComponent } from './create-event-dialog/create-event-dialog.component';
import { JoinEventDialogComponent } from './join-event-dialog/join-event-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
