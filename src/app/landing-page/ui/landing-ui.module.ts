import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacardBoardComponent } from './components/placard-board/placard-board.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HeroBeltComponent } from './components/hero-belt/hero-belt.component';
import { MissionSectionComponent } from './components/mission-section/mission-section.component';
import { LandingPageComponent } from './landing-page.component';



@NgModule({
  declarations: [
    PlacardBoardComponent,
    HeroSectionComponent,
    HeroBeltComponent,
    LandingPageComponent,
    MissionSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingUiModule { }
