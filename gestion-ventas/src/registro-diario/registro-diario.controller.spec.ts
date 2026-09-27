import { Test, TestingModule } from '@nestjs/testing';
import { RegistroDiarioController } from './registro-diario.controller.js';

describe('RegistroDiarioController', () => {
  let controller: RegistroDiarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistroDiarioController],
    }).compile();

    controller = module.get<RegistroDiarioController>(RegistroDiarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
