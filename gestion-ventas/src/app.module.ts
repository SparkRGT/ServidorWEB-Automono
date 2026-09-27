import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AgenteModule } from './agente/agente.module.js';
import { RegistroDiarioModule } from './registro-diario/registro-diario.module.js';
import { GastoModule } from './gasto/gasto.module.js';

@Module({
  imports: [AgenteModule, RegistroDiarioModule, GastoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
