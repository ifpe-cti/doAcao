import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTecnicosComponent } from './cadastro-tecnicos.component';

describe('CadastroTecnicosComponent', () => {
  let component: CadastroTecnicosComponent;
  let fixture: ComponentFixture<CadastroTecnicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroTecnicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTecnicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
