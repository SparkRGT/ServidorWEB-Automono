import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateRegistroDiarioDto } from '../../registro-diario/dto/create-registro-diario.dto.js';
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

  @Get('registros')
  findRegistros() {
    return this.supervisorService.findRegistros();
  }

  @Patch('registros/:id')
  updateRegistro(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreateRegistroDiarioDto,
  ) {
    return this.supervisorService.updateRegistro(id, dto);
  }

  @Delete('registros/:id')
  removeRegistro(@Param('id', ParseIntPipe) id: number) {
    return this.supervisorService.removeRegistro(id);
  }
}