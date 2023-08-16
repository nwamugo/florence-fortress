import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('alternatingText') alternatingTextRef: ElementRef<HTMLParagraphElement> | undefined;
  markups: string[] = [];
  markupsIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.markups = [
      'Be kind to <span style="font-weight: 700;">yourself</span>',
      'You are <span style="font-weight: 700; font-size: 3.5rem;">wonderfully</span> made',
      'You are worthy of <span style="font-weight: 700;">love</span>',
      'You are <span style="font-weight: 700;">greater</span> than any obstacles',
      'You can celebrate small <span style="font-weight: 700;">wins</span>',
      'You can <span style="font-weight: 700;">heal</span>',
      'You can <span style="font-weight: 700;">restart, refresh,</span> and <span style="font-weight: 700;">refocus</span>',
      'You are an <span style="font-weight: 700; font-size: 3.5rem;">unstoppable</span> force of nature',
      '<span style="font-weight: 700;">Beautiful,</span> you are',
      'You are <span style="font-weight: 700;">enough</span>',
      'Life is better with <span style="font-weight: 700;">you</span>'
    ];
  }

  ngAfterViewInit(): void {
    if (this.alternatingTextRef) {
      this.alternatingTextRef.nativeElement.innerHTML = this.markups[0];
      this.alternatingTextRef.nativeElement.addEventListener(
        'animationiteration',
        this.listener.bind(this),
        false
      );
    }
  }

  listener(event: AnimationEvent) {
    this.markupsIndex = this.markupsIndex < this.markups.length - 1
      ? this.markupsIndex + 1
      : 0;
    if (this.alternatingTextRef) {
      this.alternatingTextRef.nativeElement.innerHTML = this.markups[this.markupsIndex]
    }
  }
}
