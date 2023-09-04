import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapyPageContainer } from './therapy-page.container';

describe('TherapyPageContainer', () => {
  let component: TherapyPageContainer;
  let fixture: ComponentFixture<TherapyPageContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TherapyPageContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(TherapyPageContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
