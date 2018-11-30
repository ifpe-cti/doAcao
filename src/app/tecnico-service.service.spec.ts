import { TestBed, inject } from '@angular/core/testing';

import { TecnicoServiceService } from './tecnico-service.service';

describe('TecnicoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TecnicoServiceService]
    });
  });

  it('should be created', inject([TecnicoServiceService], (service: TecnicoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
