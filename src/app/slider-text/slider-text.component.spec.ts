import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTextComponent } from './slider-text.component';

describe('SliderTextComponent', () => {
  let component: SliderTextComponent;
  let fixture: ComponentFixture<SliderTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
