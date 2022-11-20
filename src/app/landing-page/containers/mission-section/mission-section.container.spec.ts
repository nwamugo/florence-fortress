import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionSectionContainer } from './mission-section.container';

describe('MissionSectionContainer', () => {
  let component: MissionSectionContainer;
  let fixture: ComponentFixture<MissionSectionContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionSectionContainer ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionSectionContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
