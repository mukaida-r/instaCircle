import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-join-event-dialog',
  templateUrl: './join-event-dialog.component.html',
  styleUrls: ['./join-event-dialog.component.scss'],
})
export class JoinEventDialogComponent implements OnInit {
  passwordForm = new FormControl('', [Validators.required]);

  user: User;
  isProcessing: boolean;

  get password(): FormControl {
    return this.passwordForm.get('password') as FormControl;
  }

  constructor() {}

  ngOnInit(): void {}

  submit() {}
}
