import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-delete-dialog',
  templateUrl: './event-delete-dialog.component.html',
  styleUrls: ['./event-delete-dialog.component.scss'],
})
export class EventDeleteDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      eventId: string;
    },
    private dialogRef: MatDialogRef<EventDeleteDialogComponent>,
    private eventService: EventService
  ) {}

  ngOnInit(): void {}

  deleteEvent() {
    this.eventService.deleteEvent(this.data.eventId);
    this.dialogRef.close();
  }
}
