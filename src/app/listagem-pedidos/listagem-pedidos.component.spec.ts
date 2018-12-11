import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPedidosComponent } from './listagem-pedidos.component';

describe('ListagemPedidosComponent', () => {
  let component: ListagemPedidosComponent;
  let fixture: ComponentFixture<ListagemPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
