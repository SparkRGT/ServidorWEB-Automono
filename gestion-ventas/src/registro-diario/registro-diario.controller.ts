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

  @Post()
  create(@Body() dto: CreateRegistroDiarioDto) {
    return this.registroDiarioService.create(dto);
  }

  @Get()
  findAll() {
    return this.registroDiarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.registroDiarioService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateRegistroDiarioDto,
  ) {
    return this.registroDiarioService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.registroDiarioService.remove(id);
  }
}
