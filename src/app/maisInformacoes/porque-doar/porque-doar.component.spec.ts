import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorqueDoarComponent } from './porque-doar.component';

describe('PorqueDoarComponent', () => {
  let component: PorqueDoarComponent;
  let fixture: ComponentFixture<PorqueDoarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorqueDoarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorqueDoarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
