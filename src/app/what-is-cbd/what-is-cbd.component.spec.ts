import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsCbdComponent } from './what-is-cbd.component';

describe('WhatIsCbdComponent', () => {
  let component: WhatIsCbdComponent;
  let fixture: ComponentFixture<WhatIsCbdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsCbdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsCbdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
