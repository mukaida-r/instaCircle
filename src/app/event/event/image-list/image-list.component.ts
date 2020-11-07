import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from 'src/app/interfaces/image';
import { EventService } from 'src/app/services/event.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
})
export class ImageListComponent implements OnInit {
  private test = this.route.snapshot.paramMap.get('eventId');
  eventId: string;
  imageList: Image[];
  value = 'http://localhost:4200/events/' + this.test;

  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.eventId = params.get('eventId');
    });
    this.imageService.getImages(this.eventId).subscribe((images) => {
      this.imageList = images;
    });
  }
}
