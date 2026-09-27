import { Module } from '@nestjs/common';
import { RegistroDiarioModule } from '../../registro-diario/registro-diario.module.js';
import { UsuarioModule } from '../../usuario.module.js';
import { AgenteController } from './agente.controller.js';
import { AgenteService } from './agente.service.js';

@Module({
  imports: [UsuarioModule, RegistroDiarioModule],
  controllers: [AgenteController],
  providers: [AgenteService],
  exports: [AgenteService],
})
export class AgenteModule {}