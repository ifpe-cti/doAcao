import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoacaoDePlaquetasComponent } from './doacao-de-plaquetas.component';

describe('DoacaoDePlaquetasComponent', () => {
  let component: DoacaoDePlaquetasComponent;
  let fixture: ComponentFixture<DoacaoDePlaquetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoacaoDePlaquetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoacaoDePlaquetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
