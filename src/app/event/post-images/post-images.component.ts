import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-post-images',
  templateUrl: './post-images.component.html',
  styleUrls: ['./post-images.component.scss'],
})
export class PostImagesComponent implements OnInit {
  event$: Observable<Event>;
  eventId: string;
  images: any[] = [];
  imageFiles: (File | string)[] = [];

  constructor(
    private route: ActivatedRoute,
    private eventServise: EventService,
    private imageService: ImageService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.eventId = params.get('eventId');
      this.event$ = this.eventServise.getEvent(this.eventId);
    });
  }

  ngOnInit(): void {}

  selectImages(event) {
    this.images = Object.values(event.target.files);
  }

  uploadImages() {
    this.imageService.uploadImages(this.eventId, this.images);
  }
}
