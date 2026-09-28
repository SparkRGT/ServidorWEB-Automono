import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateAgenteDto } from '../agente/dto/create-agente.dto.js';
import { SupervisorService } from './supervisor.service.js';

@Controller('supervisor')
export class SupervisorController {
  constructor(private readonly supervisorService: SupervisorService) {}

  @Post('agentes')
  createAgente(@Body() dto: CreateAgenteDto) {
    return this.supervisorService.createAgente(dto);
  }

  @Get('agentes')
  findAgentes() {
    return this.supervisorService.findAgentes();
  }

  @Delete('agentes/:id')
  removeAgente(@Param('id', ParseIntPipe) id: number) {
    return this.supervisorService.removeAgente(id);
  }

}