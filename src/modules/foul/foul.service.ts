import { Injectable } from '@nestjs/common';
import { CreateFoulDto } from './dto/create-foul.dto';
import { UpdateFoulDto } from './dto/update-foul.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Foul } from './entities/foul.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FoulService {
  constructor(
    @InjectRepository(Foul)
    private repository: Repository<Foul>
  ) {}

  create(createFoulDto: CreateFoulDto) {
    return this.repository.save(createFoulDto);
  }

  findAll() {
    return this.repository.find();

  }

  findOne(id: number) {
    return this.repository.find({where:{foul_id:id}});

  }

  update( updateFoulDto: UpdateFoulDto) {
    return this.repository.update({foul_id:updateFoulDto.foul_id},updateFoulDto);

  }

  remove(delDto:any) {
    return this.repository.delete(delDto)

  }
}
