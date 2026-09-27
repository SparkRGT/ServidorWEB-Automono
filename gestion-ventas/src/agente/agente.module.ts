import { Module } from '@nestjs/common';
import { AgenteService } from './agente.service.js';
import { AgenteController } from './agente.controller.js';

@Module({
  providers: [AgenteService],
  controllers: [AgenteController]
})
export class AgenteModule {}
