import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposSanguineosComponent } from './tipos-sanguineos.component';

describe('TiposSanguineosComponent', () => {
  let component: TiposSanguineosComponent;
  let fixture: ComponentFixture<TiposSanguineosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposSanguineosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposSanguineosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
