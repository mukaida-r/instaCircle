import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import { ImageService } from 'src/app/services/image.service';
import { Event } from '../../interfaces/event';
import { Image } from 'src/app/interfaces/image';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fade } from 'src/app/animations';

@Component({
  selector: 'app-post-images',
  templateUrl: './post-images.component.html',
  styleUrls: ['./post-images.component.scss'],
  animations: [fade],
})
export class PostImagesComponent implements OnInit {
  readonly MAX_IMAGE_FILE_LENGTH: number = 10;

  eventId: string;
  imageFile: string;
  images: any[] = [];
  imageFiles: (File | string)[] = [];
  isProcessing = false;
  srcs: string[] | ArrayBuffer[] = [];
  src: string;
  isActive = true;

  eventId$: Observable<string> = this.route.paramMap.pipe(
    map((param) => {
      return param.get('eventId');
    })
  );

  event$: Observable<Event>;

  images$: Observable<Image[]>;

  constructor(
    private route: ActivatedRoute,
    private eventServise: EventService,
    private imageService: ImageService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.eventId$.subscribe((id) => {
      this.eventId = id;
      this.event$ = this.eventServise.getEvent(this.eventId);
    });
  }

  private convertImage(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.srcs.push(e.target.result);
    };
    reader.readAsDataURL(file);
    console.log(file);
  }

  selectAndSetImages(event: any) {
    if (event.target.files.length) {
      this.images = Object.values(event.target.files);
      this.images.map((image: File) => {
        return this.convertImage(image);
      });
      console.log(this.srcs);
    }
  }

  removeImage(i: number) {
    this.images.splice(i, 1);
    this.srcs.splice(i, 1);
    console.log(this.srcs);
    console.log(this.images);
  }

  onCroppedImage(image: string) {
    this.imageFile = image;
  }

  uploadImages() {
    this.isProcessing = true;
    this.imageService
      .uploadImages(this.eventId, this.images)
      .then(() => this.router.navigateByUrl('/event/' + this.eventId))
      .then(() => this.snackBar.open('ファイルを投稿しました✨'))
      .finally(() => (this.isProcessing = false));
  }
}
