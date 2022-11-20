import { Component, OnInit } from '@angular/core';
import { TAboutInfo } from 'src/app/landing-page/models/about.model';
import { OVERVIEW } from '../../models/constants/organization-info.constant';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.container.html',
  styleUrls: ['./about-section.container.scss']
})
export class AboutSectionContainer implements OnInit {
  about: readonly TAboutInfo[] = OVERVIEW;

  constructor() { }

  ngOnInit(): void {
  }

}
