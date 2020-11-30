import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Event } from 'src/app/interfaces/event';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';
import { RouteParamsService } from 'src/app/services/route-params.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  readonly titleMaxLength: number = 40;
  readonly discliptionMaxLength: number = 40;

  uid: string;
  event$: Observable<Event>;
  eventId: string;
  imageFile: string;

  oldImageUrl = '';
  processing = false;

  form = this.fb.group({
    title: [
      '',
      [Validators.required, Validators.maxLength(this.titleMaxLength)],
    ],
    discliption: [
      '',
      [Validators.required, Validators.maxLength(this.discliptionMaxLength)],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private eventServise: EventService,
    private authServise: AuthService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.eventId = params.get('eventId');
      this.event$ = this.eventServise.getEvent(this.eventId);
      this.event$.subscribe((event) => {
        this.oldImageUrl = event.thumbnailURL;
        this.form.patchValue({
          title: event.title || '',
          discliption: event.discliption || '',
        });
      });
    });
    this.authServise.user$.subscribe((user) => {
      this.uid = user.uid;
    });
  }

  onCroppedImage(image: string) {
    this.imageFile = image;
  }

  async updateEventData() {
    this.processing = true;
    let eventData: Omit<Event, 'eventId' | 'ownerId' | 'createAt'> = this.form
      .value;

    if (this.imageFile !== undefined) {
      eventData = {
        ...eventData,
        thumbnailURL: this.imageFile,
      };
      await this.eventServise
        .setThumbnailToStorage(this.eventId, this.imageFile)
        .then((url) => {
          this.imageFile = url;
        });
    }
    await this.eventServise.updateEvent(eventData, this.eventId).finally(() => {
      this.processing = false;
    });
  }
}
