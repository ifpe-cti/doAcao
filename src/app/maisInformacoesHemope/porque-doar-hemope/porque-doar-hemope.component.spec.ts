import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorqueDoarHemopeComponent } from './porque-doar-hemope.component';

describe('PorqueDoarHemopeComponent', () => {
  let component: PorqueDoarHemopeComponent;
  let fixture: ComponentFixture<PorqueDoarHemopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorqueDoarHemopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorqueDoarHemopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
