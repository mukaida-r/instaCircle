import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event/event.component';
import { ImageDetailComponent } from './event/image-detail/image-detail.component';
import { PostImagesComponent } from './post-images/post-images.component';
import { ImageDetailComponent } from './event/image-detail/image-detail.component';

const routes: Routes = [
  {
    path: '',
    component: EventComponent,
  },
  {
    path: 'post-images',
    component: PostImagesComponent,
  },
  {
    path: 'images/:imageId',
    component: ImageDetailComponent,
  },
  {
    path: ':eventId/images/:imageId',
    component: ImageDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {}
