import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportanciaComponent } from './importancia.component';

describe('ImportanciaComponent', () => {
  let component: ImportanciaComponent;
  let fixture: ComponentFixture<ImportanciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportanciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
