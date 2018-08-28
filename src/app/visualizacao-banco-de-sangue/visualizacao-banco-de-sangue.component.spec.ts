import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacaoBancoDeSangueComponent } from './visualizacao-banco-de-sangue.component';

describe('VisualizacaoBancoDeSangueComponent', () => {
  let component: VisualizacaoBancoDeSangueComponent;
  let fixture: ComponentFixture<VisualizacaoBancoDeSangueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizacaoBancoDeSangueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizacaoBancoDeSangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
