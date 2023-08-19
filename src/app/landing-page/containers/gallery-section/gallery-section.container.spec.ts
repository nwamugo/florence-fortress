import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySectionContainer } from './gallery-section.container';

describe('GallerySectionContainer', () => {
  let component: GallerySectionContainer;
  let fixture: ComponentFixture<GallerySectionContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GallerySectionContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(GallerySectionContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
