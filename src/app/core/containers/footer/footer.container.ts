import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.container.html',
  styleUrls: ['./footer.container.scss']
})
export class FooterContainer implements OnInit {
  currentDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
