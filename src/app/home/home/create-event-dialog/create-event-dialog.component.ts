import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
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
    title: [''],
    password: [''],
    discliption: [''],
  });

  get title() {
    return this.form.get('title') as FormControl;
  }
  get password() {
    return this.form.get('password') as FormControl;
  }
  get discliption() {
    return this.form.get('discliption') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  createEvent() {
    const formData = this.form.value;
    const eventValue: Omit<Event, 'eventId'> = {
      title: formData.title,
      discliption: formData.discliption,
      thumbnailURL: '',
      ownerId: this.authService.uid,
      createAt: firebase.default.firestore.Timestamp.now(),
    };
    console.log(eventValue);
    this.eventService.createEventData(eventValue, formData.password);
  }
}
