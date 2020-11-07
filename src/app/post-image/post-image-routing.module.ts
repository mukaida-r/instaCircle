import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostImageComponent } from './post-image/post-image.component';

const routes: Routes = [
  {
    path: '',
    component: PostImageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostImageRoutingModule {}
