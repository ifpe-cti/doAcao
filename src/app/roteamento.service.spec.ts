import { TestBed, inject } from '@angular/core/testing';

import { RoteamentoService } from './roteamento.service';

describe('RoteamentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoteamentoService]
    });
  });

  it('should be created', inject([RoteamentoService], (service: RoteamentoService) => {
    expect(service).toBeTruthy();
  }));
});
