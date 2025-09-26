import { Test, TestingModule } from '@nestjs/testing';
import { AthuController } from './athu.controller';

describe('AthuController', () => {
  let controller: AthuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AthuController],
    }).compile();

    controller = module.get<AthuController>(AthuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
