import { Module } from '@nestjs/common';
import { AgenteModule } from '../agente/agente.module.js';
import { SupervisorController } from './supervisor.controller.js';
import { SupervisorService } from './supervisor.service.js';

@Module({
  imports: [AgenteModule],
  controllers: [SupervisorController],
  providers: [SupervisorService],
})
export class SupervisorModule {}