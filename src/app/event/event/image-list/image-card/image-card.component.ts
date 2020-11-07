import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/comment';
import { Image } from 'src/app/interfaces/image';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent implements OnInit {
  @Input() image: Image;

  comments: any[] = [
    {
      coment: '',
    },
    {
      coment: '',
    },
    {
      coment: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
