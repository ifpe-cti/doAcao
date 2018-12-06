import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeDeSangueHemopeComponent } from './volume-de-sangue-hemope.component';

describe('VolumeDeSangueHemopeComponent', () => {
  let component: VolumeDeSangueHemopeComponent;
  let fixture: ComponentFixture<VolumeDeSangueHemopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeDeSangueHemopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeDeSangueHemopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
