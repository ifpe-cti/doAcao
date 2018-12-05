import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervaloComponent } from './intervalo.component';

describe('IntervaloComponent', () => {
  let component: IntervaloComponent;
  let fixture: ComponentFixture<IntervaloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervaloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
