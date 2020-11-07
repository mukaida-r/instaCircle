import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event/event.component';
import { PostImagesComponent } from './post-images/post-images.component';

const routes: Routes = [
  {
    path: '',
    component: EventComponent,
  },
  {
    path: ':eventId',
    component: EventComponent,
  },
  {
    path: ':eventId/post-images',
    component: PostImagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {}
