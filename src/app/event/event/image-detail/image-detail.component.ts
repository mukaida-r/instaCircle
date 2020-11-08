import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/interfaces/image';
import { ImageService } from 'src/app/services/image.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss'],
})
export class ImageDetailComponent implements OnInit {
  eventId: string = this.route.snapshot.paramMap.get('eventId');
  imageId: string = this.route.snapshot.paramMap.get('imageId');
  image$ = this.imageService.getImage(this.eventId, this.imageId);
  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.eventId, this.imageId, this.image$);
  }
}
