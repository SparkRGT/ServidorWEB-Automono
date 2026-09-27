import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRegistroDiarioDto } from './dto/create-registro-diario.dto.js';
import { UpdateRegistroDiarioDto } from './dto/update-registro-diario.dto.js';

export type RegistroDiario = {
  id_registroDiario: number;
  fecha: Date;
  totalVentas: number;
  descripcionVentas: string;
  totalGastos: number;
  descripcionGastos: string;
  observacion: string;
  id_agente: number;
};

@Injectable()
export class RegistroDiarioService {
  private readonly registrosDiarios: RegistroDiario[] = [];
  private nextId = 1;

  create(dto: CreateRegistroDiarioDto): RegistroDiario {
    const registro: RegistroDiario = {
      id_registroDiario: this.nextId++,
      fecha: new Date(dto.fecha),
      totalVentas: dto.totalVentas,
      totalGastos: dto.totalGastos,
      observacion: dto.observacion,
      descripcionVentas: dto.descripcionVentas,
      descripcionGastos: dto.descripcionGastos,
      id_agente: dto.id_agente,
    };

    this.registrosDiarios.push(registro);
    return registro;
  }

  findAll(): RegistroDiario[] {
    return this.registrosDiarios;
  }

  findOne(id: number): RegistroDiario {
    const registro = this.registrosDiarios.find(
      (item) => item.id_registroDiario === id,
    );
    if (!registro) {
      throw new NotFoundException(`Registro diario ${id} no encontrado`);
    }
    return registro;
  }

  update(id: number, dto: UpdateRegistroDiarioDto): RegistroDiario {
    const registro = this.findOne(id);

    if (dto.totalVentas !== undefined) {
      registro.totalVentas = dto.totalVentas;
    }
    if (dto.descripcionVentas !== undefined) {
      registro.descripcionVentas = dto.descripcionVentas;
    }
    if (dto.totalGastos !== undefined) {
      registro.totalGastos = dto.totalGastos;
    }
    if (dto.descripcionGastos !== undefined) {
      registro.descripcionGastos = dto.descripcionGastos;
    }
    if (dto.observacion !== undefined) {
      registro.observacion = dto.observacion;
    }
    return registro;
  }

  findByAgent(idAgente: number): RegistroDiario[] {
    return this.registrosDiarios.filter((item) => item.id_agente === idAgente);
  }

  updateAsSupervisor(
    id: number,
    dto: CreateRegistroDiarioDto,
  ): RegistroDiario {
    const registro = this.findOne(id);
    registro.fecha = new Date(dto.fecha);
    registro.totalVentas = dto.totalVentas;
    registro.descripcionVentas = dto.descripcionVentas;
    registro.totalGastos = dto.totalGastos;
    registro.descripcionGastos = dto.descripcionGastos;
    registro.observacion = dto.observacion;
    registro.id_agente = dto.id_agente;
    return registro;
  }

  remove(id: number): RegistroDiario {
    const index = this.registrosDiarios.findIndex(
      (item) => item.id_registroDiario === id,
    );
    if (index === -1) {
      throw new NotFoundException(`Registro diario ${id} no encontrado`);
    }

    const [eliminado] = this.registrosDiarios.splice(index, 1);
    return eliminado;
  }
}
