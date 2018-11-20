import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoDeSangueComponent } from './solicitacao-de-sangue.component';

describe('SolicitacaoDeSangueComponent', () => {
  let component: SolicitacaoDeSangueComponent;
  let fixture: ComponentFixture<SolicitacaoDeSangueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitacaoDeSangueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacaoDeSangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
