import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TAboutInfo } from 'src/app/landing-page/models/about.model';

@Component({
  selector: 'app-story-slider',
  templateUrl: './story-slider.component.html',
  styleUrls: ['./story-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StorySliderComponent implements OnInit {
  @Input() about!: readonly TAboutInfo[];

  constructor() { }

  ngOnInit(): void {
  }

}
