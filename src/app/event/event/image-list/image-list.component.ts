import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/interfaces/image';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
})
export class ImageListComponent implements OnInit {
  imageList: Image[] = [
    {
      imageURL: 'assets/images/image-card-sample01.jpg',
    },
    {
      imageURL: 'assets/images/image-card-sample02.jpg',
    },
    {
      imageURL: 'assets/images/image-card-sample03.jpg',
    },
    {
      imageURL: 'assets/images/image-card-sample04.jpg',
    },
    {
      imageURL: 'assets/images/image-card-sample01.jpg',
    },
    {
      imageURL: 'assets/images/image-card-sample02.jpg',
    },
    {
      imageURL: 'assets/images/image-card-sample03.jpg',
    },
    {
      imageURL: 'assets/images/image-card-sample04.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
