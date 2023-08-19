import { LandingUiModule } from './components/landing-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageContainer } from './containers/landing-page.container';
import { HeroSectionContainer } from './containers/hero-section/hero-section.container';
import { MissionSectionContainer } from './containers/mission-section/mission-section.container';
import { AboutSectionContainer } from './containers/about-section/about-section.container';
import { SharedModule } from '../shared/shared.module';
import { GallerySectionContainer } from './containers/gallery-section/gallery-section.container';

@NgModule({
  declarations: [
    LandingPageContainer,
    AboutSectionContainer,
    HeroSectionContainer,
    MissionSectionContainer,
    GallerySectionContainer,
  ],
  imports: [CommonModule, LandingUiModule, SharedModule],
  exports: [LandingPageContainer, GallerySectionContainer],
})
export class LandingPageModule {}
