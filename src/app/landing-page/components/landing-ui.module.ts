import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacardBoardComponent } from './placard-board/placard-board.component';
import { HeroBeltComponent } from './hero-belt/hero-belt.component';
import { StorySliderComponent } from './story-slider/story-slider.component';
import { GalleryGridItemComponent } from './gallery-grid-item/gallery-grid-item.component';
import { ImageCardComponent } from './image-card/image-card.component';

@NgModule({
  declarations: [
    PlacardBoardComponent,
    HeroBeltComponent,
    StorySliderComponent,
    GalleryGridItemComponent,
    ImageCardComponent,
  ],
  imports: [CommonModule],
  exports: [
    PlacardBoardComponent,
    HeroBeltComponent,
    StorySliderComponent,
    GalleryGridItemComponent,
    ImageCardComponent,
  ],
})
export class LandingUiModule {}
