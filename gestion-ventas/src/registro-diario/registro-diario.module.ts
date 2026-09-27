import { Module } from '@nestjs/common';
import { RegistroDiarioService } from './registro-diario.service.js';

@Module({
  providers: [RegistroDiarioService],
  exports: [RegistroDiarioService],
})
export class RegistroDiarioModule {}
