import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-join-event-dialog',
  templateUrl: './join-event-dialog.component.html',
  styleUrls: ['./join-event-dialog.component.scss'],
})
export class JoinEventDialogComponent implements OnInit {
  readonly MAX_EVENT_NAME_LENGTH = 50;

  form = this.fb.group({
    eventName: [
      '',
      [Validators.required, Validators.maxLength(this.MAX_EVENT_NAME_LENGTH)],
    ],
    password: ['', [Validators.required]],
  });

  user: User;
  isProcessing: boolean;

  get eventName(): FormControl {
    return this.form.get('eventName') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submit() {}
}
