import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import { ImageService } from 'src/app/services/image.service';
import { EditImageDialogComponent } from '../edit-image-dialog/edit-image-dialog.component';
import { Event } from '../../interfaces/event';
import { Image } from 'src/app/interfaces/image';
import { switchMap } from 'rxjs/operators';

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
  settingImages$: Observable<Image[]>;

  eventId$: Observable<string> = this.route.paramMap.pipe(
    switchMap((param) => {
      return param.get('eventId');
    })
  );

  images$: Observable<Image[]>;
  srcs: string[] | ArrayBuffer[];
  src: string | ArrayBuffer;

  constructor(
    private route: ActivatedRoute,
    private eventServise: EventService,
    private imageService: ImageService,
    private dialog: MatDialog
  ) {
    this.eventId$.subscribe((id) => {
      this.eventId = id;
      this.settingImages$ = this.imageService.getImages(this.eventId);
    });
    this.route.paramMap.subscribe((params) => {
      this.eventId = params.get('eventId');
      this.event$ = this.eventServise.getEvent(this.eventId);
    });
  }

  ngOnInit(): void {}

  convertImage(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  selectImages(event: any) {
    if (event.target.files.length) {
      this.images = Object.values(event.target.files);
      this.images.map((image: File) => {
        this.convertImage(image);
      });
    }
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
