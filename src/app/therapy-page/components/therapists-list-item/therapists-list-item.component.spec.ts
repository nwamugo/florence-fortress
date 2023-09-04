import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistsListItemComponent } from './therapists-list-item.component';

describe('TherapistsListItemComponent', () => {
  let component: TherapistsListItemComponent;
  let fixture: ComponentFixture<TherapistsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapistsListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TherapistsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
