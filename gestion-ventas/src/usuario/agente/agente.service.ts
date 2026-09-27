import { Injectable, NotFoundException } from '@nestjs/common';
import { UsuarioService } from '../../usuario.service.js';

export type Agente = {
  id_agente: number;
  id_usuario: number;
  apellido: string;
  telefono: string;
};

@Injectable()
export class AgenteService {
  private readonly agentes: Agente[] = [];
  private nextId = 1;

  constructor(private readonly usuarioService: UsuarioService) {}

  create(data: { nombre: string; apellido: string; telefono: string; email: string; password: string }): Agente {
    const usuario = this.usuarioService.create({
      nombre: data.nombre,
      email: data.email,
      password: data.password,
      rol: 'agente',
      activo: true,
    });
    const agente = {
      id_agente: this.nextId++,
      id_usuario: usuario.id_usuario,
      apellido: data.apellido,
      telefono: data.telefono,
    };
    this.agentes.push(agente);
    return agente;
  }

  findOne(id: number): Agente {
    const agente = this.agentes.find((item) => item.id_agente === id);
    if (!agente) {
      throw new NotFoundException(`Agente ${id} no encontrado`);
    }
    return agente;
  }

  findAll(): Agente[] {
    return this.agentes;
  }

  remove(id: number): Agente {
    const index = this.agentes.findIndex((item) => item.id_agente === id);
    if (index === -1) {
      throw new NotFoundException(`Agente ${id} no encontrado`);
    }
    const [agente] = this.agentes.splice(index, 1);
    return agente;
  }
}