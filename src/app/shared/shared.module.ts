import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BottomActionsComponent } from './bottom-actions/bottom-actions.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [BottomActionsComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatRippleModule,
    ClipboardModule,
    MatSnackBarModule,
  ],
  exports: [BottomActionsComponent],
})
export class SharedModule {}
