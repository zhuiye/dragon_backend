import { Injectable } from '@nestjs/common';
import { CreateCompetitionItemDto } from './dto/create-competition-item.dto';
import { UpdateCompetitionItemDto } from './dto/update-competition-item.dto';

@Injectable()
export class CompetitionItemService {
  create(createCompetitionItemDto: CreateCompetitionItemDto) {
    return 'This action adds a new competitionItem';
  }

  findAll() {
    return `This action returns all competitionItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} competitionItem`;
  }

  update(id: number, updateCompetitionItemDto: UpdateCompetitionItemDto) {
    return `This action updates a #${id} competitionItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} competitionItem`;
  }
}
