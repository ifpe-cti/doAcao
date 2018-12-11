import { TestBed, inject } from '@angular/core/testing';

import { PedidosDoacaoService } from './pedidos-doacao.service';

describe('PedidosDoacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PedidosDoacaoService]
    });
  });

  it('should be created', inject([PedidosDoacaoService], (service: PedidosDoacaoService) => {
    expect(service).toBeTruthy();
  }));
});
