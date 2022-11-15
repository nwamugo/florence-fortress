import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacardBoardComponent } from './placard-board.component';

describe('PlacardBoardComponent', () => {
  let component: PlacardBoardComponent;
  let fixture: ComponentFixture<PlacardBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacardBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacardBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
