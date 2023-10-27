import { TestBed } from '@angular/core/testing';

import { CadastroMedicoService } from './cadastro-medico.service';

describe('CadastroMedicoService', () => {
  let service: CadastroMedicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroMedicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
