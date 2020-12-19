import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Event } from 'src/app/interfaces/event';
import { Image } from 'src/app/interfaces/image';
import { EventService } from 'src/app/services/event.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
})
export class ImageListComponent implements OnInit {
  eventId: string;
  imageList: Image[];
  eventUrl: string = location.href.replace('event/', '');

  event$: Observable<Event>;

  eventId$: Observable<string> = this.route.paramMap.pipe(
    map((param) => {
      return param.get('eventId');
    })
  );

  imageList$: Observable<Image[]> = this.eventId$.pipe(
    switchMap((id) => {
      return this.imageService.getImages(id);
    })
  );

  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.eventId$.subscribe((id) => {
      this.eventId = id;
      this.event$ = this.eventService.getEvent(this.eventId);
    });
  }

  deleteImage(imageId: string) {
    this.imageService.deleteImage(imageId, this.eventId);
  }
}
