import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';

export type RolUsuario = 'agente' | 'supervisor';

export type Usuario = {
  id_usuario: number;
  nombre: string;
  email: string;
  password: string;
  rol: RolUsuario;
  activo: boolean;
  fecha_creacion: Date;
};

@Injectable()
export class UsuarioService {
  private readonly usuarios: Usuario[] = [];
  private nextId = 1;

  create(data: Omit<Usuario, 'id_usuario' | 'fecha_creacion'>): Usuario {
    if (this.usuarios.some((usuario) => usuario.email === data.email)) {
      throw new ConflictException(`El email ${data.email} ya está registrado`);
    }

    const usuario: Usuario = {
      ...data,
      id_usuario: this.nextId++,
      fecha_creacion: new Date(),
    };
    this.usuarios.push(usuario);
    return usuario;
  }

  findOne(id: number): Usuario {
    const usuario = this.usuarios.find((item) => item.id_usuario === id);
    if (!usuario) {
      throw new NotFoundException(`Usuario ${id} no encontrado`);
    }
    return usuario;
  }

  findAll(): Usuario[] {
    return this.usuarios;
  }
}
