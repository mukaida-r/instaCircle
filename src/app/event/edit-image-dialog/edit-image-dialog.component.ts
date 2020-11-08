import { Component, OnInit } from '@angular/core';
import { CropperOptions } from '@deer-inc/cropper';

@Component({
  selector: 'app-edit-image-dialog',
  templateUrl: './edit-image-dialog.component.html',
  styleUrls: ['./edit-image-dialog.component.scss'],
})
export class EditImageDialogComponent implements OnInit {
  imageFile: string;
  settingImage: string;
  settingImages: string[];
  options: CropperOptions = {
    aspectRatio: 4 / 3, // width / height
    oldImageUrl: 'http://fakeimg.pl/400x400?font=lobster',
    width: 420,
    resultType: 'base64', // base64 | blob
  };

  constructor() {}

  ngOnInit(): void {}

  onCroppedImage(image: string) {
    this.imageFile = image;
  }

  setImage(imageFile: string) {
    this.settingImage = imageFile;
    this.imageFile = '';
  }
}
