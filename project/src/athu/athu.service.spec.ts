import { Test, TestingModule } from '@nestjs/testing';
import { AthuService } from './athu.service';

describe('AthuService', () => {
  let service: AthuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AthuService],
    }).compile();

    service = module.get<AthuService>(AthuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
