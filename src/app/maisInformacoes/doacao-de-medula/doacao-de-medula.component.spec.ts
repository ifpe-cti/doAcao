import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoacaoDeMedulaComponent } from './doacao-de-medula.component';

describe('DoacaoDeMedulaComponent', () => {
  let component: DoacaoDeMedulaComponent;
  let fixture: ComponentFixture<DoacaoDeMedulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoacaoDeMedulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoacaoDeMedulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
