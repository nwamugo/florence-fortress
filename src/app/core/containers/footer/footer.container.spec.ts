import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContainer } from './footer.container';

describe('FooterContainer', () => {
  let component: FooterContainer;
  let fixture: ComponentFixture<FooterContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
