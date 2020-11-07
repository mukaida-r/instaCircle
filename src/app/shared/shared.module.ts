import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BottomActionsComponent } from './bottom-actions/bottom-actions.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [BottomActionsComponent],
  imports: [CommonModule, SharedRoutingModule, MatIconModule, MatDialogModule],
  exports: [BottomActionsComponent],
})
export class SharedModule {}
