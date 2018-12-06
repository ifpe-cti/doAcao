import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapasComponent } from './etapas.component';

describe('EtapasComponent', () => {
  let component: EtapasComponent;
  let fixture: ComponentFixture<EtapasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtapasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
