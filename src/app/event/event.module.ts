import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from '../shared/shared.module';
import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event/event.component';
import { CommentFormComponent } from './event/image-detail/comment-form/comment-form.component';
import { CommentListComponent } from './event/image-detail/comment-list/comment-list.component';
import { ImageDetailComponent } from './event/image-detail/image-detail.component';
import { ImageCardComponent } from './event/image-list/image-card/image-card.component';
import { ImageListComponent } from './event/image-list/image-list.component';
import { PostImagesComponent } from './post-images/post-images.component';
import { CropperModule } from '@deer-inc/cropper';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EditComponent } from './edit/edit.component';
import { EventDeleteDialogComponent } from './event-delete-dialog/event-delete-dialog.component';

@NgModule({
  declarations: [
    EventComponent,
    CommentFormComponent,
    ImageListComponent,
    ImageDetailComponent,
    CommentListComponent,
    ImageCardComponent,
    PostImagesComponent,
    EditComponent,
    EventDeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatIconModule,
    CropperModule,
    SharedModule,
    MatTooltipModule,
    ClipboardModule,
  ],
})
export class EventModule {}
