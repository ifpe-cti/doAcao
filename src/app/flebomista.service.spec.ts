import { TestBed, inject } from '@angular/core/testing';

import { FlebomistaService } from './flebomista.service';

describe('FlebomistaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlebomistaService]
    });
  });

  it('should be created', inject([FlebomistaService], (service: FlebomistaService) => {
    expect(service).toBeTruthy();
  }));
});
