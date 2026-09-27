import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRegistroDiarioDto } from './dto/create-registro-diario.dto.js';
import { UpdateRegistroDiarioDto } from './dto/update-registro-diario.dto.js';

export type RegistroDiario = {
  id: number;
  fecha: Date;
  totalVentas: number;
  totalGastos: number;
  observacion: string;
  agenteId: number;
  Gastoid: number;
};

@Injectable()
export class RegistroDiarioService {
  private readonly registrosDiarios: RegistroDiario[] = [];
  private nextId = 1;

  create(dto: CreateRegistroDiarioDto): RegistroDiario {
    const registro: RegistroDiario = {
      id: this.nextId++,
      fecha: new Date(dto.fecha),
      totalVentas: dto.totalVentas,
      totalGastos: dto.totalGastos,
      observacion: dto.observacion,
      agenteId: dto.agenteId,
      Gastoid: dto.Gastoid,
    };

    this.registrosDiarios.push(registro);
    return registro;
  }

  findAll(): RegistroDiario[] {
    return this.registrosDiarios;
  }

  findOne(id: number): RegistroDiario {
    const registro = this.registrosDiarios.find((item) => item.id === id);
    if (!registro) {
      throw new NotFoundException(`Registro diario ${id} no encontrado`);
    }
    return registro;
  }

  update(id: number, dto: UpdateRegistroDiarioDto): RegistroDiario {
    const registro = this.findOne(id);

    if (dto.fecha !== undefined) {
      registro.fecha = new Date(dto.fecha);
    }
    if (dto.totalVentas !== undefined) {
      registro.totalVentas = dto.totalVentas;
    }
    if (dto.totalGastos !== undefined) {
      registro.totalGastos = dto.totalGastos;
    }
    if (dto.observacion !== undefined) {
      registro.observacion = dto.observacion;
    }
    if (dto.agenteId !== undefined) {
      registro.agenteId = dto.agenteId;
    }
    if (dto.Gastoid !== undefined) {
      registro.Gastoid = dto.Gastoid;
    }

    return registro;
  }

  remove(id: number): RegistroDiario {
    const index = this.registrosDiarios.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Registro diario ${id} no encontrado`);
    }

    const [eliminado] = this.registrosDiarios.splice(index, 1);
    return eliminado;
  }
}
