import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateEventDialogComponent } from 'src/app/home/home/create-event-dialog/create-event-dialog.component';
import { JoinEventDialogComponent } from 'src/app/home/home/join-event-dialog/join-event-dialog.component';

@Component({
  selector: 'app-bottom-actions',
  templateUrl: './bottom-actions.component.html',
  styleUrls: ['./bottom-actions.component.scss'],
})
export class BottomActionsComponent implements OnInit {
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
