import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Event } from '../interfaces/event';
import { AuthService } from '../services/auth.service';
import { EventService } from '../services/event.service';
import { RouteParamsService } from '../services/route-params.service';
import { JoinEventDialogComponent } from '../shared/join-event-dialog/join-event-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  event$: Observable<Event>;

  private eventId: string;
  private readonly subscription: Subscription = new Subscription();

  constructor(
    public authService: AuthService,
    private eventService: EventService,
    private dialog: MatDialog,
    private routeService: RouteParamsService,
    private router: Router
  ) {
    this.subscription.add(
      this.routeService.eventIdSubject.subscribe((data) => {
        this.eventId = data;
        this.event$ = this.eventService.getEvent(this.eventId);
      })
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openJoinEventDialog(id?: string): void {
    this.dialog.open(JoinEventDialogComponent, {
      maxWidth: '100vw',
      minWidth: '50%',
      autoFocus: false,
      restoreFocus: false,
      data: { id },
    });
  }

  logout(): void {
    this.authService.logout().then(() => {
      this.router.navigateByUrl('/welcome');
    });
  }
}
