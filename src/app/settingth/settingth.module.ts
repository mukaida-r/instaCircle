import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingthRoutingModule } from './settingth-routing.module';
import { SettingthComponent } from './settingth/settingth.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SettingthComponent],
  imports: [CommonModule, SettingthRoutingModule, MatButtonModule],
})
export class SettingthModule {}
