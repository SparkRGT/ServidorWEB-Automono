import { Injectable } from '@nestjs/common';
import { CreateRegistroDiarioDto } from '../../registro-diario/dto/create-registro-diario.dto.js';
import { RegistroDiario, RegistroDiarioService } from '../../registro-diario/registro-diario.service.js';
import { CreateAgenteDto } from '../agente/dto/create-agente.dto.js';
import { Agente, AgenteService } from '../agente/agente.service.js';

@Injectable()
export class SupervisorService {
  constructor(
    private readonly agenteService: AgenteService,
    private readonly registroDiarioService: RegistroDiarioService,
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

  findRegistros(): RegistroDiario[] {
    return this.registroDiarioService.findAll();
  }

  updateRegistro(id: number, dto: CreateRegistroDiarioDto): RegistroDiario {
    this.agenteService.findOne(dto.id_agente);
    return this.registroDiarioService.updateAsSupervisor(id, dto);
  }

  removeRegistro(id: number): RegistroDiario {
    return this.registroDiarioService.remove(id);
  }
}