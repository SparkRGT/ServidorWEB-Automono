import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { AgenteService } from '../usuario/agente/agente.service.js';
import { CreateRegistroDiarioDto } from './dto/create-registro-diario.dto.js';
import { UpdateRegistroDiarioDto } from './dto/update-registro-diario.dto.js';
import { RegistroDiarioService } from './registro-diario.service.js';

@Controller('registro-diario')
export class RegistroDiarioController {
  constructor(
    private readonly registroDiarioService: RegistroDiarioService,
    private readonly agenteService: AgenteService,
  ) {}

  @Post('agente/:idAgente')
  createAsAgent(
    @Param('idAgente', ParseIntPipe) idAgente: number,
    @Body() dto: CreateRegistroDiarioDto,
  ) {
    this.agenteService.findOne(idAgente);
    return this.registroDiarioService.create({ ...dto, id_agente: idAgente });
  }

  @Get('agente/:idAgente')
  findOwnRecords(@Param('idAgente', ParseIntPipe) idAgente: number) {
    this.agenteService.findOne(idAgente);
    return this.registroDiarioService.findByAgent(idAgente);
  }

  @Patch('agente/:idAgente/:idRegistro')
  updateOwnRecord(
    @Param('idAgente', ParseIntPipe) idAgente: number,
    @Param('idRegistro', ParseIntPipe) idRegistro: number,
    @Body() dto: UpdateRegistroDiarioDto,
  ) {
    this.agenteService.findOne(idAgente);
    const registro = this.registroDiarioService.findOne(idRegistro);
    if (registro.id_agente !== idAgente) {
      throw new NotFoundException(`Registro diario ${idRegistro} no pertenece al agente`);
    }
    return this.registroDiarioService.update(idRegistro, dto);
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
    if (dto.id_agente === undefined) {
      throw new NotFoundException('El registro requiere un agente');
    }
    this.agenteService.findOne(dto.id_agente);
    return this.registroDiarioService.updateAsSupervisor(id, dto);
  }

  @Delete('supervisor/:id')
  removeAsSupervisor(@Param('id', ParseIntPipe) id: number) {
    return this.registroDiarioService.remove(id);
  }
}
