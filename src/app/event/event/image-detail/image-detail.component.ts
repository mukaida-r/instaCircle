import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Image } from 'src/app/interfaces/image';
import { User } from 'src/app/interfaces/user';
import { switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss'],
})
export class ImageDetailComponent implements OnInit {
  eventId: string = this.route.snapshot.paramMap.get('eventId');
  imageId: string = this.route.snapshot.paramMap.get('imageId');
  image$: Observable<Image> = this.imageService.getImage(
    this.eventId,
    this.imageId
  );
  imageProvider$: Observable<User> = this.image$.pipe(
    switchMap((image) => {
      const uid: string = image.uid;
      return this.userService.getUserData(uid);
    })
  );

  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {}
}
