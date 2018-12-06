import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosHemopeComponent } from './beneficios-hemope.component';

describe('BeneficiosHemopeComponent', () => {
  let component: BeneficiosHemopeComponent;
  let fixture: ComponentFixture<BeneficiosHemopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiosHemopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiosHemopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
