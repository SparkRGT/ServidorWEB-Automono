import { Module } from '@nestjs/common';
import { RegistroDiarioService } from './registro-diario.service.js';
import { RegistroDiarioController } from './registro-diario.controller.js';
import { AgenteModule } from '../usuario/agente/agente.module.js';

@Module({
  imports: [AgenteModule],
  controllers: [RegistroDiarioController],
  providers: [RegistroDiarioService],
  exports: [RegistroDiarioService],
})
export class RegistroDiarioModule {}
