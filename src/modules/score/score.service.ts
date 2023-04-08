import { Injectable } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Score } from './entities/score.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ScoreService {

  constructor(
    @InjectRepository(Score)
    private repository: Repository<Score>
  ) {}
  create(createScoreDto: CreateScoreDto) {
    return this.repository.save(createScoreDto);

  }

  findAll(query) {
    return this.repository.find({where:query});

  }

  findOne(id: number) {
    return this.repository.find({where:{}});

  }

  update(updateScoreDto: UpdateScoreDto) {
    return this.repository.update({score_id:updateScoreDto.score_id},updateScoreDto);
  }

  remove(delDto: any) {
    return this.repository.delete(delDto)

  }
}
