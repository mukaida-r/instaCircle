import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event/event.component';
import { ImageListComponent } from './event/image-list/image-list.component';
import { ImageDetailComponent } from './event/image-detail/image-detail.component';
import { CommentFormComponent } from './event/image-detail/comment-form/comment-form.component';
import { CommentListComponent } from './event/image-detail/comment-list/comment-list.component';
import { ImageCardComponent } from './event/image-list/image-card/image-card.component';
import { PostImagesComponent } from './post-images/post-images.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  declarations: [
    EventComponent,
    CommentFormComponent,
    ImageListComponent,
    ImageDetailComponent,
    CommentListComponent,
    ImageCardComponent,
    PostImagesComponent,
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
    ClipboardModule,
  ],
})
export class EventModule {}
