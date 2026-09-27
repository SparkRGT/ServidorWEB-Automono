import { Module } from '@nestjs/common';
import { RegistroDiarioService } from './registro-diario.service.js';
import { RegistroDiarioController } from './registro-diario.controller.js';

@Module({
  providers: [RegistroDiarioService],
  controllers: [RegistroDiarioController]
})
export class RegistroDiarioModule {}
