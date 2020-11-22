import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss'],
})
export class ImageDetailComponent implements OnInit {
  eventId = this.route.snapshot.paramMap.get('eventId');
  imageId = this.route.snapshot.paramMap.get('imageId');
  image$ = this.imageService.getImage(this.eventId, this.imageId);

  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}
}
