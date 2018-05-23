import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoDeSangueComponent } from './banco-de-sangue.component';

describe('BancoDeSangueComponent', () => {
  let component: BancoDeSangueComponent;
  let fixture: ComponentFixture<BancoDeSangueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancoDeSangueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoDeSangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
