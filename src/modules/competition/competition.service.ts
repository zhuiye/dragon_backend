import { Injectable, } from '@nestjs/common';
import { Repository, } from 'typeorm';
import { Competition } from './competition.entity';
import { CreateCompetitionDto } from './dto/create_competition.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateCompetitionDto } from './dto';

@Injectable()
export class CompetitionService {
  constructor(
    @InjectRepository(Competition)
    private competitionRepository: Repository<Competition>
  ) {}

  async create(createNoteDto: CreateCompetitionDto) {
   
    return  await this.competitionRepository.save(createNoteDto)
  }

  async findAll(query) {
    return await this.competitionRepository.find({where:query});
  }

  async findOne(id: number) {
    return await this.competitionRepository.findOne({where:{
      id
    }});
  }

  async update(updateCompetitionDto: UpdateCompetitionDto) {
    // updateNoteDto.updateTime = new Date();
    return await this.competitionRepository.update({
      id:updateCompetitionDto.id
    }, updateCompetitionDto);
  }

  async remove(delObj:any) {
    return await this.competitionRepository.delete(delObj);
  }
}

