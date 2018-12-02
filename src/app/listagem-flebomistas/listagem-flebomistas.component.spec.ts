import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemFlebomistasComponent } from './listagem-flebomistas.component';

describe('ListagemFlebomistasComponent', () => {
  let component: ListagemFlebomistasComponent;
  let fixture: ComponentFixture<ListagemFlebomistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemFlebomistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemFlebomistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
