import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingthRoutingModule } from './settingth-routing.module';
import { SettingthComponent } from './settingth/settingth.component';

@NgModule({
  declarations: [SettingthComponent],
  imports: [CommonModule, SettingthRoutingModule],
})
export class SettingthModule {}
