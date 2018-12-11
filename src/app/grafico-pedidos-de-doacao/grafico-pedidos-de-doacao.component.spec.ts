import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoPedidosDeDoacaoComponent } from './grafico-pedidos-de-doacao.component';

describe('GraficoPedidosDeDoacaoComponent', () => {
  let component: GraficoPedidosDeDoacaoComponent;
  let fixture: ComponentFixture<GraficoPedidosDeDoacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoPedidosDeDoacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoPedidosDeDoacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
