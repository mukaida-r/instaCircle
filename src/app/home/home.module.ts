import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateEventDialogComponent } from './home/create-event-dialog/create-event-dialog.component';
import { JoinEventDialogComponent } from './home/join-event-dialog/join-event-dialog.component';
import { CreatedEventListComponent } from './home/created-event-list/created-event-list.component';
import { JoinedEventListComponent } from './home/joined-event-list/joined-event-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    CreatedEventListComponent,
    CreatedEventListComponent,
    JoinedEventListComponent,
    CreateEventDialogComponent,
    JoinEventDialogComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
