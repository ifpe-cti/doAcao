import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialHemopeComponent } from './inicial-hemope.component';

describe('InicialHemopeComponent', () => {
  let component: InicialHemopeComponent;
  let fixture: ComponentFixture<InicialHemopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicialHemopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicialHemopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
