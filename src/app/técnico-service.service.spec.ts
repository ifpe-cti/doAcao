import { TestBed, inject } from '@angular/core/testing';

import { TécnicoServiceService } from './técnico-service.service';

describe('TécnicoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TécnicoServiceService]
    });
  });

  it('should be created', inject([TécnicoServiceService], (service: TécnicoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
