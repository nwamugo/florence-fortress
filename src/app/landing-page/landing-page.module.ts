import { LandingUiModule } from './components/landing-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AboutSectionContainer } from './containers/about-section/about-section.container';
import { GallerySectionContainer } from './containers/gallery-section/gallery-section.container';
import { HeroSectionContainer } from './containers/hero-section/hero-section.container';
import { LandingPageContainer } from './containers/landing-page.container';
import { MissionSectionContainer } from './containers/mission-section/mission-section.container';

@NgModule({
  declarations: [
    LandingPageContainer,
    AboutSectionContainer,
    HeroSectionContainer,
    MissionSectionContainer,
    GallerySectionContainer,
  ],
  imports: [CommonModule, LandingUiModule, SharedModule],
  exports: [LandingPageContainer],
})
export class LandingPageModule {}
