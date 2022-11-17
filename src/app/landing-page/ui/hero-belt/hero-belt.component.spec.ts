import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBeltComponent } from './hero-belt.component';

describe('HeroBeltComponent', () => {
  let component: HeroBeltComponent;
  let fixture: ComponentFixture<HeroBeltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBeltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroBeltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
