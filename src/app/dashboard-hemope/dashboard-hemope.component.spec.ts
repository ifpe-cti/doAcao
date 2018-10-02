import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHemopeComponent } from './dashboard-hemope.component';

describe('DashboardHemopeComponent', () => {
  let component: DashboardHemopeComponent;
  let fixture: ComponentFixture<DashboardHemopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHemopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHemopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
