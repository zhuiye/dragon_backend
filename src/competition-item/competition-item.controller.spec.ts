import { Test, TestingModule } from '@nestjs/testing';
import { CompetitionItemController } from './competition-item.controller';
import { CompetitionItemService } from './competition-item.service';

describe('CompetitionItemController', () => {
  let controller: CompetitionItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompetitionItemController],
      providers: [CompetitionItemService],
    }).compile();

    controller = module.get<CompetitionItemController>(CompetitionItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
