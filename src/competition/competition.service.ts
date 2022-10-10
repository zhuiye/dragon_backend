import { Injectable, } from '@nestjs/common';
import { Repository, } from 'typeorm';
import { Competition } from './entities/competition.entity';
import { CreateCompetitionDto } from './dto/create_competition.dto';
import { Constant } from 'src/constant';
import { InjectRepository } from '@nestjs/typeorm';
// import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class CompetitionService {
  constructor(
    @InjectRepository(Competition)
    private competitionRepository: Repository<Competition>
  ) {}

  async create(createNoteDto: CreateCompetitionDto) {
    // createNoteDto.createTime = createNoteDto.updateTime = new Date();
    // createNoteDto.isDelete = false;
    // console.log(createNoteDto)
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

  async remove(competitionId: number) {
    return await this.competitionRepository.delete(competitionId);
  }
}

