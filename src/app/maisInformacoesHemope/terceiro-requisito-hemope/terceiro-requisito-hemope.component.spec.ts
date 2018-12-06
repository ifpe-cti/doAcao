import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiroRequisitoHemopeComponent } from './terceiro-requisito-hemope.component';

describe('TerceiroRequisitoHemopeComponent', () => {
  let component: TerceiroRequisitoHemopeComponent;
  let fixture: ComponentFixture<TerceiroRequisitoHemopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceiroRequisitoHemopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceiroRequisitoHemopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
