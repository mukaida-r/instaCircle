import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event/event.component';
import { ImageListComponent } from './event/image-list/image-list.component';
import { ImageDetailComponent } from './event/image-detail/image-detail.component';
import { CommentFormComponent } from './event/image-detail/comment-form/comment-form.component';
import { CommentListComponent } from './event/image-detail/comment-list/comment-list.component';

@NgModule({
  declarations: [
    EventComponent,
    CommentFormComponent,
    ImageListComponent,
    ImageDetailComponent,
    CommentListComponent,
  ],
  imports: [CommonModule, EventRoutingModule],
})
export class EventModule {}
