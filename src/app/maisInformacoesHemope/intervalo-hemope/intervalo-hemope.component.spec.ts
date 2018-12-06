import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervaloHemopeComponent } from './intervalo-hemope.component';

describe('IntervaloHemopeComponent', () => {
  let component: IntervaloHemopeComponent;
  let fixture: ComponentFixture<IntervaloHemopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervaloHemopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervaloHemopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
