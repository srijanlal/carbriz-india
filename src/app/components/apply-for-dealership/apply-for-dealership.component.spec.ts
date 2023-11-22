import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForDealershipComponent } from './apply-for-dealership.component';

describe('ApplyForDealershipComponent', () => {
  let component: ApplyForDealershipComponent;
  let fixture: ComponentFixture<ApplyForDealershipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyForDealershipComponent]
    });
    fixture = TestBed.createComponent(ApplyForDealershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
