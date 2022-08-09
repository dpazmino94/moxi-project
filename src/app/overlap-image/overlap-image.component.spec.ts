import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlapImageComponent } from './overlap-image.component';

describe('OverlapImageComponent', () => {
  let component: OverlapImageComponent;
  let fixture: ComponentFixture<OverlapImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlapImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlapImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
