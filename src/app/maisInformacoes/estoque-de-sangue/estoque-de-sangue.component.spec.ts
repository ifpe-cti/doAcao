import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueDeSangueComponent } from './estoque-de-sangue.component';

describe('EstoqueDeSangueComponent', () => {
  let component: EstoqueDeSangueComponent;
  let fixture: ComponentFixture<EstoqueDeSangueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstoqueDeSangueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoqueDeSangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
