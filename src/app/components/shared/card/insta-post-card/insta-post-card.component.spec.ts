import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaPostCardComponent } from './insta-post-card.component';

describe('InstaPostCardComponent', () => {
  let component: InstaPostCardComponent;
  let fixture: ComponentFixture<InstaPostCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstaPostCardComponent]
    });
    fixture = TestBed.createComponent(InstaPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
