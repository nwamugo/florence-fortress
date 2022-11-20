import { LandingUiModule } from './components/landing-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageContainer } from './containers/landing-page/landing-page.container';
import { HeroSectionContainer } from './containers/hero-section/hero-section.container';
import { MissionSectionContainer } from './containers/mission-section/mission-section.container';
import { AboutSectionContainer } from './containers/about-section/about-section.container';

@NgModule({
  declarations: [
    LandingPageContainer,
    AboutSectionContainer,
    HeroSectionContainer,
    MissionSectionContainer,
  ],
  imports: [CommonModule, LandingUiModule],
  exports: [LandingPageContainer],
})
export class LandingPageModule {}
