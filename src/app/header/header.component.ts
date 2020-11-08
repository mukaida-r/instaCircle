import { FormControl, Validators } from '@angular/forms';
import { User } from '../interfaces/user';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Event } from '../interfaces/event';
import { AuthService } from '../services/auth.service';
import { EventService } from '../services/event.service';
import { MatDialog } from '@angular/material/dialog';
import { JoinEventDialogComponent } from '../shared/join-event-dialog/join-event-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  event = true; // TODO: eventがあるかないかを判定して、画像投稿ボタンの表示切替
  passwordForm = new FormControl('', [Validators.required]);

  user: User;
  isProcessing: boolean;

  get password(): FormControl {
    return this.passwordForm.get('password') as FormControl;
  }

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private eventService: EventService,
    private dialog: MatDialog
  ) {}

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
