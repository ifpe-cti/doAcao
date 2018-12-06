import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoacaoDePlaquetasHemopeComponent } from './doacao-de-plaquetas-hemope.component';

describe('DoacaoDePlaquetasHemopeComponent', () => {
  let component: DoacaoDePlaquetasHemopeComponent;
  let fixture: ComponentFixture<DoacaoDePlaquetasHemopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoacaoDePlaquetasHemopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoacaoDePlaquetasHemopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
