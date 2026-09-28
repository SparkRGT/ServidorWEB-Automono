import { Injectable } from '@nestjs/common';
import { CreateAgenteDto } from '../agente/dto/create-agente.dto.js';
import { Agente, AgenteService } from '../agente/agente.service.js';

@Injectable()
export class SupervisorService {
  constructor(
    private readonly agenteService: AgenteService,
  ) {}

  createAgente(dto: CreateAgenteDto): Agente {
    return this.agenteService.create(dto);
  }

  findAgentes(): Agente[] {
    return this.agenteService.findAll();
  }

  removeAgente(id: number): Agente {
    return this.agenteService.remove(id);
  }

}