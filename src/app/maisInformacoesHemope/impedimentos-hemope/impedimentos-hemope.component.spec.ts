import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpedimentosHemopeComponent } from './impedimentos-hemope.component';

describe('ImpedimentosHemopeComponent', () => {
  let component: ImpedimentosHemopeComponent;
  let fixture: ComponentFixture<ImpedimentosHemopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpedimentosHemopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpedimentosHemopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
