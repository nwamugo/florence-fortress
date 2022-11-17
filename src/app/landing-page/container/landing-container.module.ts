import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingUiModule } from '../ui/landing-ui.module';
import { LandingContainer } from './landing.container';

@NgModule({
  declarations: [LandingContainer],
  imports: [CommonModule, LandingUiModule],
  exports: [LandingContainer],
})
export class LandingContainerModule {}
