import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Event } from 'src/app/interfaces/event';
import { Image } from 'src/app/interfaces/image';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { ImageService } from 'src/app/services/image.service';
import { DeleteDialogComponent } from 'src/app/shared/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent implements OnInit {
  @Input() image: Image;
  @Input() event: Event;

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

  user$: Observable<User> = this.authService.user$;

  constructor(
    private imageService: ImageService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  isEditMode() {}

  openDeleteDialog(imageId: string) {
    this.dialog
      .open(DeleteDialogComponent, {
        minWidth: 300,
        maxHeight: 320,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.imageService
            .deleteImage(this.event.eventId, imageId)
            .then(() => this.snackBar.open('画像を削除しました'));
        } else {
          return;
        }
      });
  }
}
