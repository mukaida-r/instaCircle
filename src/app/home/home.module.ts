import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateEventListComponent } from './create-event-list/create-event-list.component';
import { CreatedEventListComponent } from './created-event-list/created-event-list.component';
import { JoinedEventListComponent } from './joined-event-list/joined-event-list.component';
import { CreateEventDialogComponent } from './home/create-event-dialog/create-event-dialog.component';
import { JoinEventDialogComponent } from './home/join-event-dialog/join-event-dialog.component';

@NgModule({
  declarations: [
    HomeComponent,
    CreateEventListComponent,
    CreatedEventListComponent,
    JoinedEventListComponent,
    CreateEventDialogComponent,
    JoinEventDialogComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
