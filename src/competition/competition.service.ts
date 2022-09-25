import { Injectable,Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Competition } from '../entities/competition.entity';
import { CreateCompetitionDto } from './dto/create_competition.dto';
import { Constant } from 'src/constant';
// import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class CompetitionService {
  constructor(
    @Inject(Constant.COMPETITION_REPOSITORY) 
    private competitionRepository: Repository<Competition>
  ) {}

  async create(createNoteDto: CreateCompetitionDto) {
    // createNoteDto.createTime = createNoteDto.updateTime = new Date();
    // createNoteDto.isDelete = false;
    return await this.competitionRepository.save(createNoteDto);
  }

  async findAll() {
    return await this.competitionRepository.find();
  }

  async findOne(id: number) {
    // return await this.competitionRepository.findOne();
  }

  // async update(id: number, updateNoteDto: UpdateNoteDto) {
  //   updateNoteDto.updateTime = new Date();
  //   return await this.competitionRepository.update(id, updateNoteDto);
  // }

  async remove(id: number) {
    return await this.competitionRepository.delete(id);
  }
}

