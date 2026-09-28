import { Controller, Get } from '@nestjs/common';
import { AgenteService } from './agente.service.js';

@Controller('agente')
export class AgenteController {
  constructor(private readonly agenteService: AgenteService) {}

  @Get()
  findAll() {
    return this.agenteService.findAll();
  }

}