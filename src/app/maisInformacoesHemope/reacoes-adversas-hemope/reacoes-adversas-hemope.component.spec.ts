import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacoesAdversasHemopeComponent } from './reacoes-adversas-hemope.component';

describe('ReacoesAdversasHemopeComponent', () => {
  let component: ReacoesAdversasHemopeComponent;
  let fixture: ComponentFixture<ReacoesAdversasHemopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReacoesAdversasHemopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReacoesAdversasHemopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
