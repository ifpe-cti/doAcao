import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracoesNosExamesHemopeComponent } from './alteracoes-nos-exames-hemope.component';

describe('AlteracoesNosExamesHemopeComponent', () => {
  let component: AlteracoesNosExamesHemopeComponent;
  let fixture: ComponentFixture<AlteracoesNosExamesHemopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlteracoesNosExamesHemopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteracoesNosExamesHemopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
