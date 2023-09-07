import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageContainer } from './landing-page/containers/landing-page.container';

const routes: Routes = [
  {
    path: 'home',
    component: LandingPageContainer
  },
  {
    path: 'therapy',
    loadChildren: () =>
      import('./therapy-page/therapy-page.module').then(m => m.TherapyPageModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
