import { Module } from '@nestjs/common';
import { RegistroDiarioModule } from '../../registro-diario/registro-diario.module.js';
import { AgenteModule } from '../agente/agente.module.js';
import { SupervisorController } from './supervisor.controller.js';
import { SupervisorService } from './supervisor.service.js';

@Module({
  imports: [AgenteModule, RegistroDiarioModule],
  controllers: [SupervisorController],
  providers: [SupervisorService],
})
export class SupervisorModule {}