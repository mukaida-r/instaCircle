import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinEventDialogComponent } from './join-event-dialog/join-event-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SharedRoutingModule } from './shared-routing.module';
import { BottomActionsComponent } from './bottom-actions/bottom-actions.component';
import { MatRippleModule } from '@angular/material/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    JoinEventDialogComponent,
    BottomActionsComponent,
    DeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatRippleModule,
    ClipboardModule,
    MatSnackBarModule,
  ],
  exports: [BottomActionsComponent, JoinEventDialogComponent],
})
export class SharedModule {}
