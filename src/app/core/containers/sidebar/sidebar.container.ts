import {
  AfterViewInit, Component, ElementRef,
  OnDestroy, OnInit, ViewChild
} from '@angular/core';
import { affirmations } from './../../models/markup-affirmations.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.container.html',
  styleUrls: ['./sidebar.container.scss'],
})
export class SidebarContainer implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('alternatingText') alternatingTextRef:
    ElementRef<HTMLParagraphElement> | undefined;
  markups: string[] = [];
  markupsIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.markups = affirmations;
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

  ngOnDestroy(): void {
    this.alternatingTextRef?.nativeElement.removeEventListener(
      'animationiteration',
      this.listener.bind(this)
    )
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
