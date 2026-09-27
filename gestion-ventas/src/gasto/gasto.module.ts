import { Module } from '@nestjs/common';
import { GastoService } from './gasto.service.js';
import { GastoController } from './gasto.controller.js';

@Module({
  providers: [GastoService],
  controllers: [GastoController]
})
export class GastoModule {}
