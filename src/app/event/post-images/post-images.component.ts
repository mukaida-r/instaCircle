import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CropperOptions } from '@deer-inc/cropper';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import { ImageService } from 'src/app/services/image.service';
import { EditImageDialogComponent } from '../edit-image-dialog/edit-image-dialog.component';

@Component({
  selector: 'app-post-images',
  templateUrl: './post-images.component.html',
  styleUrls: ['./post-images.component.scss'],
})
export class PostImagesComponent implements OnInit {
  readonly MAX_IMAGE_FILE_LENGTH: number = 4;

  event$: Observable<Event>;
  eventId: string;
  imageFile: string;
  images: any[] = [];
  imageFiles: (File | string)[] = [];
  settingImage: string;
  settingImages: string[];

  constructor(
    private route: ActivatedRoute,
    private eventServise: EventService,
    private imageService: ImageService,
    private dialog: MatDialog
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

  openEditImageDialog() {
    this.dialog.open(EditImageDialogComponent, {
      maxWidth: '100vw',
      minWidth: '50%',
      autoFocus: false,
      restoreFocus: false,
    });
  }
}
