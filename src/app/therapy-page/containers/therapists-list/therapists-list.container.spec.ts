import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistsListContainer } from './therapists-list.container';

describe('TherapistsListContainer', () => {
  let component: TherapistsListContainer;
  let fixture: ComponentFixture<TherapistsListContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TherapistsListContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(TherapistsListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
