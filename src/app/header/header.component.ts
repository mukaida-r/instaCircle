import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Event } from '../interfaces/event';
import { AuthService } from '../services/auth.service';
import { EventService } from '../services/event.service';
import { MatDialog } from '@angular/material/dialog';
import { JoinEventDialogComponent } from '../shared/join-event-dialog/join-event-dialog.component';
import { RouteParamsService } from '../services/route-params.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  eventId: string;

  event$: Observable<Event>;

  constructor(
    public authService: AuthService,
    private eventService: EventService,
    private dialog: MatDialog,
    private routeService: RouteParamsService
  ) {
    this.routeService.eventIdSubject.subscribe((data) => {
      this.eventId = data;
      this.event$ = this.eventService.getEvent(this.eventId);
    });
  }

  ngOnInit(): void {}

  openJoinEventDialog(id?: string) {
    this.dialog.open(JoinEventDialogComponent, {
      maxWidth: '100vw',
      minWidth: '50%',
      autoFocus: false,
      restoreFocus: false,
      data: { id },
    });
  }
}
