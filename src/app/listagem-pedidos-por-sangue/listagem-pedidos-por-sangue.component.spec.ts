import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPedidosPorSangueComponent } from './listagem-pedidos-por-sangue.component';

describe('ListagemPedidosPorSangueComponent', () => {
  let component: ListagemPedidosPorSangueComponent;
  let fixture: ComponentFixture<ListagemPedidosPorSangueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemPedidosPorSangueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemPedidosPorSangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
