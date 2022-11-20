import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionContainer } from './hero-section.container';

describe('HeroSectionContainer', () => {
  let component: HeroSectionContainer;
  let fixture: ComponentFixture<HeroSectionContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSectionContainer ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSectionContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
