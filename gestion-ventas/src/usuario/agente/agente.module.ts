import { Module } from '@nestjs/common';
import { UsuarioModule } from '../../usuario.module.js';
import { AgenteController } from './agente.controller.js';
import { AgenteService } from './agente.service.js';

@Module({
  imports: [UsuarioModule],
  controllers: [AgenteController],
  providers: [AgenteService],
  exports: [AgenteService],
})
export class AgenteModule {}