import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingthComponent } from './settingth/settingth.component';

const routes: Routes = [
  {
    path: '',
    component: SettingthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingthRoutingModule {}
