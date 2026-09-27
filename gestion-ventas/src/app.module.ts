import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { RegistroDiarioModule } from './registro-diario/registro-diario.module.js';
import { UsuarioModule } from './usuario.module.js';
import { AgenteModule } from './usuario/agente/agente.module.js';
import { SupervisorModule } from './usuario/supervisor/supervisor.module.js';

@Module({
  imports: [UsuarioModule, AgenteModule, SupervisorModule, RegistroDiarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
