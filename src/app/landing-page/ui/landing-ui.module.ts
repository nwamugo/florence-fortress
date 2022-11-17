import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacardBoardComponent } from './placard-board/placard-board.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HeroBeltComponent } from './hero-belt/hero-belt.component';
import { LandingPageComponent } from './landing-page/landing-page.component';



@NgModule({
  declarations: [
    PlacardBoardComponent,
    HeroSectionComponent,
    HeroBeltComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingUiModule { }
