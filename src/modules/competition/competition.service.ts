import { Injectable, } from '@nestjs/common';
import { Repository, } from 'typeorm';
import { Competition } from './competition.entity';
import { CreateCompetitionDto } from './dto/create_competition.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CompetitionService {
  constructor(
    @InjectRepository(Competition)
    private competitionRepository: Repository<Competition>
  ) {}

  async create(createNoteDto: CreateCompetitionDto) {
   
    return  await this.competitionRepository.save(createNoteDto)
  }

  async findAll() {
    return await this.competitionRepository.find();
  }

  async findOne(id: number) {
    // return await this.competitionRepository.findOne();
  }

  async update(competitionId: number, updateCompetitionDto: CreateCompetitionDto) {
    // updateNoteDto.updateTime = new Date();
    return await this.competitionRepository.update(competitionId, updateCompetitionDto);
  }

  async remove(delObj:any) {
    return await this.competitionRepository.delete(delObj);
  }
}

