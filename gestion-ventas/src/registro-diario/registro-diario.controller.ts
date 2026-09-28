import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateRegistroDiarioDto } from './dto/create-registro-diario.dto.js';
import { UpdateRegistroDiarioDto } from './dto/update-registro-diario.dto.js';
import { RegistroDiarioService } from './registro-diario.service.js';

@Controller('registro-diario')
export class RegistroDiarioController {
  constructor(private readonly registroDiarioService: RegistroDiarioService) {}

  @Post('agente/:idAgente')
  createAsAgent(
    @Param('idAgente', ParseIntPipe) idAgente: number,
    @Body() dto: CreateRegistroDiarioDto,
  ) {
    return this.registroDiarioService.createForAgent(idAgente, dto);
  }

  @Get('agente/:idAgente')
  findOwnRecords(@Param('idAgente', ParseIntPipe) idAgente: number) {
    return this.registroDiarioService.findByAgentOrThrow(idAgente);
  }

  @Patch('agente/:idAgente/:idRegistro')
  updateOwnRecord(
    @Param('idAgente', ParseIntPipe) idAgente: number,
    @Param('idRegistro', ParseIntPipe) idRegistro: number,
    @Body() dto: UpdateRegistroDiarioDto,
  ) {
    return this.registroDiarioService.updateOwn(idAgente, idRegistro, dto);
  }

  @Get('supervisor')
  findAllAsSupervisor() {
    return this.registroDiarioService.findAll();
  }

  @Patch('supervisor/:id')
  updateAsSupervisor(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreateRegistroDiarioDto,
  ) {
    return this.registroDiarioService.updateAsSupervisor(id, dto);
  }

  @Delete('supervisor/:id')
  removeAsSupervisor(@Param('id', ParseIntPipe) id: number) {
    return this.registroDiarioService.remove(id);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.registroDiarioService.findOne(id);
  }
}
