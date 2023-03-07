import { Test, TestingModule } from '@nestjs/testing';
import { KanjiController } from './tst.controller';

describe('KanjiController', () => {
  let controller: KanjiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KanjiController],
    }).compile();

    controller = module.get<KanjiController>(KanjiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
