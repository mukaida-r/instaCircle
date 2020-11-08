import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-join-event-dialog',
  templateUrl: './join-event-dialog.component.html',
  styleUrls: ['./join-event-dialog.component.scss'],
})
export class JoinEventDialogComponent implements OnInit {
  passwordForm = new FormControl('', [Validators.required]);

  user: User;
  isProcessing: boolean;
  isPossible: boolean;
  eventId: string;

  get password(): FormControl {
    return this.passwordForm.get('password') as FormControl;
  }

  constructor(
    private eventService: EventService,
    private router: Router,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      id: string;
    }
  ) {}

  ngOnInit(): void {}

  async submit() {
    console.log(this.data);
    console.log(this.passwordForm.value);

    this.isPossible = await this.eventService.judgePassword(
      this.passwordForm.value,
      this.data.id
    );
    if (this.isPossible) {
      this.router.navigateByUrl(`events/${this.data.id}`);
    } else {
      this.snackBar.open('パスワードが違います', null, {
        duration: 2500,
      });
    }
  }
}
