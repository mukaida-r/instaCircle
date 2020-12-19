import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: 'welcome',
    pathMatch: 'full',
    loadChildren: () =>
      import('./welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: '404',
    pathMatch: 'full',
    component: NotFoundComponent,
  },
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'event/:eventId',
        loadChildren: () =>
          import('./event/event.module').then((m) => m.EventModule),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
