import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityProductsComponent } from './quality-products.component';

describe('QualityProductsComponent', () => {
  let component: QualityProductsComponent;
  let fixture: ComponentFixture<QualityProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
