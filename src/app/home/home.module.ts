import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { EventListCardComponent } from './event-list-card/event-list-card.component';
import { HomeRoutingModule } from './home-routing.module';
import { CreateEventDialogComponent } from './home/create-event-dialog/create-event-dialog.component';
import { HomeComponent } from './home/home.component';
import { JoinEventDialogComponent } from './home/join-event-dialog/join-event-dialog.component';

@NgModule({
  declarations: [
    HomeComponent,
    CreateEventDialogComponent,
    JoinEventDialogComponent,
    EventListCardComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, MatTabsModule],
})
export class HomeModule {}
