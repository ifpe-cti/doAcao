import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeDeSangueComponent } from './volume-de-sangue.component';

describe('VolumeDeSangueComponent', () => {
  let component: VolumeDeSangueComponent;
  let fixture: ComponentFixture<VolumeDeSangueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeDeSangueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeDeSangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
