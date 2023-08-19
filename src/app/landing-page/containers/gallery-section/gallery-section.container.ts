import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-section',
  templateUrl: './gallery-section.container.html',
  styleUrls: ['./gallery-section.container.scss']
})
export class GallerySectionContainer implements OnInit {
  gridItems = [1, 2, 3, 4, 5, 6]

  constructor() { }

  ngOnInit(): void {
  }

  getItemClassName(index: number) {
    const itemNumber = index + 2;
    return `item-${itemNumber}`
  }

  chooseImage(index: number) {
    const itemNumber = index + 2;

    switch (itemNumber) {
      case 2:
        return {
          path: "assets/img/panel-guests.jpg",
          title: "Guest Speakers at the Mega Healing Conference"
        }
      case 3:
        return {
          path: "assets/img/teaching.jpg",
          title: "Florence Fortress counsellor sensitizing on domestic violence"
        }
      case 4:
        return {
          path: "assets/img/supportive-hug.jpg",
          title: "A supportive hug shared at the Mega Healing Conference"
        }
      case 5:
        return {
          path: "assets/img/boy-girl-writing.jpg",
          title: "Pupils taking notes during an outreach"
        }
      case 6:
        return {
          path: "assets/img/team.jpg",
          title: "Florence Fortress amazing team"
        }
      case 7:
        return {
          path: "assets/img/school-outreach.jpg",
          title: "A group picture with students"
        }
      default:
        return {
          path: "",
          title: ""
        }
    }
  }

}
