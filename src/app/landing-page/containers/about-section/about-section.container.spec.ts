import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionContainer } from './about-section.container';

describe('AboutSectionContainer', () => {
  let component: AboutSectionContainer;
  let fixture: ComponentFixture<AboutSectionContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSectionContainer ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSectionContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
