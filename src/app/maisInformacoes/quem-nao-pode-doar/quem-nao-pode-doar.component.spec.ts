import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuemNaoPodeDoarComponent } from './quem-nao-pode-doar.component';

describe('QuemNaoPodeDoarComponent', () => {
  let component: QuemNaoPodeDoarComponent;
  let fixture: ComponentFixture<QuemNaoPodeDoarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuemNaoPodeDoarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuemNaoPodeDoarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
