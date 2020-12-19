import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';
import { Event } from '../../../interfaces/event';

@Component({
  selector: 'app-create-event-dialog',
  templateUrl: './create-event-dialog.component.html',
  styleUrls: ['./create-event-dialog.component.scss'],
})
export class CreateEventDialogComponent implements OnInit {
  form = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(40)]],
    password: ['', [Validators.required, Validators.maxLength(40)]],
    descliption: ['', [Validators.required, Validators.maxLength(40)]],
  });

  get titleControl() {
    return this.form.get('title') as FormControl;
  }
  get passwordControl() {
    return this.form.get('password') as FormControl;
  }
  get descliptionControl() {
    return this.form.get('descliption') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  submit() {
    const formData = this.form.value;
    const eventValue: Omit<Event, 'eventId'> = {
      title: formData.title,
      descliption: formData.descliption,
      thumbnailURL: 'assets/images/image-card-sample01.jpg',
      ownerId: this.authService.uid,
      createAt: firebase.default.firestore.Timestamp.now(),
      joinedUserCount: 1,
    };
    this.eventService.createEvent(eventValue, formData.password);
  }
}
