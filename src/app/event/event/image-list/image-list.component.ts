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
  eventUrl: string = location.href;
  event$: Observable<Event>;

  eventId$: Observable<string> = this.route.paramMap.pipe(
    map((param) => {
      return param.get('eventId');
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
    this.imageService.getImages(this.eventId).subscribe((images) => {
      this.imageList = images;
    });
  }
}
