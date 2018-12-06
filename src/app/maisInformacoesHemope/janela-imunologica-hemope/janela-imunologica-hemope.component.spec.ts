import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanelaImunologicaHemopeComponent } from './janela-imunologica-hemope.component';

describe('JanelaImunologicaHemopeComponent', () => {
  let component: JanelaImunologicaHemopeComponent;
  let fixture: ComponentFixture<JanelaImunologicaHemopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanelaImunologicaHemopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanelaImunologicaHemopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
