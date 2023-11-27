import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBillCardComponent } from './product-bill-card.component';

describe('ProductBillCardComponent', () => {
  let component: ProductBillCardComponent;
  let fixture: ComponentFixture<ProductBillCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductBillCardComponent]
    });
    fixture = TestBed.createComponent(ProductBillCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
