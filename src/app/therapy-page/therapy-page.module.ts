import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TherapyPageRoutingModule } from './therapy-page-routing.module';
import { TherapyPageContainer } from './containers/therapy-page.container';
import { SharedModule } from '../shared/shared.module';
import { TherapistsListContainer } from './containers/therapists-list/therapists-list.container';
import { TherapyUiModule } from './components/therapy-ui.module';

@NgModule({
  declarations: [
    TherapyPageContainer,
    TherapistsListContainer,
  ],
  imports: [
    CommonModule,
    TherapyPageRoutingModule,
    TherapyUiModule,
    SharedModule
  ],
})
export class TherapyPageModule {}
