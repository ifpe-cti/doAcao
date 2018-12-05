import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesSobreDoacaoHemopeComponent } from './informacoes-sobre-doacao-hemope.component';

describe('InformacoesSobreDoacaoHemopeComponent', () => {
  let component: InformacoesSobreDoacaoHemopeComponent;
  let fixture: ComponentFixture<InformacoesSobreDoacaoHemopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacoesSobreDoacaoHemopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesSobreDoacaoHemopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
