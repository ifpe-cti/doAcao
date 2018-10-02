import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemDeUsuariosComponent } from './listagem-de-usuarios.component';

describe('ListagemDeUsuariosComponent', () => {
  let component: ListagemDeUsuariosComponent;
  let fixture: ComponentFixture<ListagemDeUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemDeUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemDeUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
