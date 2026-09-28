import { Test, TestingModule } from '@nestjs/testing';
import { AgenteService } from '../usuario/agente/agente.service.js';
import { RegistroDiarioService } from './registro-diario.service.js';

describe('RegistroDiarioService', () => {
  let service: RegistroDiarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RegistroDiarioService,
        {
          provide: AgenteService,
          useValue: { findOne: () => ({ id_agente: 1 }) },
        },
      ],
    }).compile();

    service = module.get<RegistroDiarioService>(RegistroDiarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
