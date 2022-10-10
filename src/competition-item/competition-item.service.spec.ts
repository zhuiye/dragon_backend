import { Test, TestingModule } from '@nestjs/testing';
import { CompetitionItemService } from './competition-item.service';

describe('CompetitionItemService', () => {
  let service: CompetitionItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompetitionItemService],
    }).compile();

    service = module.get<CompetitionItemService>(CompetitionItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
