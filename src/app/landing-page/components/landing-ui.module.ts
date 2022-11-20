import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacardBoardComponent } from './placard-board/placard-board.component';
import { HeroBeltComponent } from './hero-belt/hero-belt.component';
import { StorySliderComponent } from './story-slider/story-slider.component';

@NgModule({
  declarations: [
    PlacardBoardComponent,
    HeroBeltComponent,
    StorySliderComponent,
  ],
  imports: [CommonModule],
  exports: [
    PlacardBoardComponent,
    HeroBeltComponent,
    StorySliderComponent,
  ],
})
export class LandingUiModule {}
