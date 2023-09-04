import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TherapyPageContainer } from './containers/therapy-page.container';

const routes: Routes = [{ path: '', component: TherapyPageContainer }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TherapyPageRoutingModule {}
