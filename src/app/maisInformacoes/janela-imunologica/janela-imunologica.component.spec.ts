import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanelaImunologicaComponent } from './janela-imunologica.component';

describe('JanelaImunologicaComponent', () => {
  let component: JanelaImunologicaComponent;
  let fixture: ComponentFixture<JanelaImunologicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanelaImunologicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanelaImunologicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
