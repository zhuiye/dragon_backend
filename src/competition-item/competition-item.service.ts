import { Injectable } from '@nestjs/common';
import { CreateCompetitionItemDto } from './dto/create-competition-item.dto';
import { UpdateCompetitionItemDto } from './dto/update-competition-item.dto';
import {CompetitionItem} from './entities/competition-item.entity'

import { Repository, } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CompetitionItemService {
  constructor(
    @InjectRepository(CompetitionItem)
    private competitionItemRepository: Repository<CompetitionItem>
  ) {}

  create(createCompetitionItemDto: CreateCompetitionItemDto) {
    return this.competitionItemRepository.save(createCompetitionItemDto);
  }

  async getRelation(id:number){
    /*
     let photoRepository = connection.getRepository(Photo);
    let photos = await photoRepository.find({ relations: ["metadata"] });
    */
    return this.competitionItemRepository.find({
      relations:{"competition_item_sort":true},where:{
competition_item_id:id
      }})
  }

  findAll() {
    return this.competitionItemRepository.find();
  }

  findOne(id: number) {
    return this.competitionItemRepository.find({where:{competition_item_id:id}});

  }

  update( updateCompetitionItemDto: UpdateCompetitionItemDto) {
    return this.competitionItemRepository.update({competition_item_id:updateCompetitionItemDto.competition_item_id},updateCompetitionItemDto);
  }

  remove(id: number) {
    return this.competitionItemRepository.delete({
      competition_item_id:id
    })
  }
}
