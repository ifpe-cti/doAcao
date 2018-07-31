import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGoogleComponent } from './login-google.component';

describe('LoginGoogleComponent', () => {
  let component: LoginGoogleComponent;
  let fixture: ComponentFixture<LoginGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginGoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
