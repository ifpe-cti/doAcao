import { TestBed, inject } from '@angular/core/testing';

import { BancoDeSangueService } from './banco-de-sangue.service';


describe('BancoDeSangueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BancoDeSangueService]
    });
  });

  it('should be created', inject([BancoDeSangueService], (service: BancoDeSangueService) => {
    expect(service).toBeTruthy();
  }));
});
