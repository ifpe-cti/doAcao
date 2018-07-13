import { TestBed, inject } from '@angular/core/testing';

import { FichasMedicasService } from './fichas-medicas.service';

describe('FichasMedicasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FichasMedicasService]
    });
  });

  it('should be created', inject([FichasMedicasService], (service: FichasMedicasService) => {
    expect(service).toBeTruthy();
  }));
});
