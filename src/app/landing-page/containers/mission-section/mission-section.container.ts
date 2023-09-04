import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mission-section',
  templateUrl: './mission-section.container.html',
  styleUrls: ['./mission-section.container.scss']
})
export class MissionSectionContainer implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goToTherapy() {
    this.route.navigateByUrl('/therapy');
  }
}
