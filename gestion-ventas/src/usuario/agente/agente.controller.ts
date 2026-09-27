import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { RegistroDiarioService } from '../../registro-diario/registro-diario.service.js';
import { UpdateRegistroDiarioDto } from '../../registro-diario/dto/update-registro-diario.dto.js';
import { CreateRegistroAgenteDto } from './dto/create-registro-agente.dto.js';
import { AgenteService } from './agente.service.js';

@Controller('agente')
export class AgenteController {
  constructor(
    private readonly agenteService: AgenteService,
    private readonly registroDiarioService: RegistroDiarioService,
  ) {}

  @Get()
  findAll() {
    return this.agenteService.findAll();
  }

  @Post(':idAgente/registros')
  createRegistro(@Param('idAgente', ParseIntPipe) idAgente: number, @Body() dto: CreateRegistroAgenteDto) {
    this.agenteService.findOne(idAgente);
    return this.registroDiarioService.create({ ...dto, id_agente: idAgente });
  }

  @Get(':idAgente/registros')
  findOwnRegistros(@Param('idAgente', ParseIntPipe) idAgente: number) {
    this.agenteService.findOne(idAgente);
    return this.registroDiarioService.findByAgent(idAgente);
  }

  @Patch(':idAgente/registros/:idRegistro')
  updateOwnRegistro(
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
}