import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryGridItemComponent } from './gallery-grid-item.component';

describe('GalleryGridItemComponent', () => {
  let component: GalleryGridItemComponent;
  let fixture: ComponentFixture<GalleryGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryGridItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
