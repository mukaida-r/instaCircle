import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostImageRoutingModule } from './post-image-routing.module';
import { PostImageComponent } from './post-image/post-image.component';

@NgModule({
  declarations: [PostImageComponent],
  imports: [CommonModule, PostImageRoutingModule],
})
export class PostImageModule {}
