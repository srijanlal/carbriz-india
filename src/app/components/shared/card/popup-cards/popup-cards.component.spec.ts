import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCardsComponent } from './popup-cards.component';

describe('PopupCardsComponent', () => {
  let component: PopupCardsComponent;
  let fixture: ComponentFixture<PopupCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupCardsComponent]
    });
    fixture = TestBed.createComponent(PopupCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
