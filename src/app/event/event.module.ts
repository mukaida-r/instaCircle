import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event/event.component';
import { PostedImageCardComponent } from './event/posted-image-card/posted-image-card.component';
import { CommentFormComponent } from './event/posted-image-card/comment-form/comment-form.component';
import { CommentList } from './event/posted-image-card/comment-list.dialog/comment-list.dialog.component';
import { ImageListComponent } from './event/image-list/image-list.component';
import { ImageDetailComponent } from './event/image-detail/image-detail.component';
import { CommentListComponent } from './event/comment-list/comment-list.component';

@NgModule({
  declarations: [
    EventComponent,
    PostedImageCardComponent,
    CommentFormComponent,
    CommentList.DialogComponent,
    ImageListComponent,
    ImageDetailComponent,
    CommentListComponent,
  ],
  imports: [CommonModule, EventRoutingModule],
})
export class EventModule {}
