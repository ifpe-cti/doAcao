import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialUsuarioComponent } from './inicial-usuario.component';

describe('InicialUsuarioComponent', () => {
  let component: InicialUsuarioComponent;
  let fixture: ComponentFixture<InicialUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicialUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicialUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
