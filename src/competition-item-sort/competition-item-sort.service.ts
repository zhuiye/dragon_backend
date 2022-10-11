import { Injectable } from '@nestjs/common';
import { CreateCompetitionItemSortDto } from './dto/create-competition-item-sort.dto';
import { UpdateCompetitionItemSortDto } from './dto/update-competition-item-sort.dto';
import {CompetitionItemSort} from './competition-item-sort.entity'
import {CompetitionItem} from '../competition-item/entities/competition-item.entity'
import { Repository, } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class CompetitionItemSortService {
  constructor(
    @InjectRepository(CompetitionItemSort)
    private competitionItemSortRepository: Repository<CompetitionItemSort>,
    private competitionItemRepository: Repository<CompetitionItem>
  ) {}

  async create(createCompetitionItemSortDto: CreateCompetitionItemSortDto) {
    
    const id=createCompetitionItemSortDto.competition_item_id;
    
    const newItemSort=await  this.competitionItemSortRepository.save(createCompetitionItemSortDto)
    
    const competitionItem=await this.competitionItemRepository.findOne({where:{competition_item_id:id,},relations:['competition_item_sort']})
    
    competitionItem.competition_item_sort.push(newItemSort)

     await this.competitionItemRepository.save(competitionItem)
    

    return newItemSort
  }

  getRelation(id:any){
    return this.competitionItemSortRepository.find({
      where:{competition_item_inner_id:id,},
      relations:["competition_item"]
    })
  }

  findAll() {
    return this.competitionItemSortRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} competitionItemSort`;
  }

  update(id: number, updateCompetitionItemSortDto: UpdateCompetitionItemSortDto) {
    return `This action updates a #${id} competitionItemSort`;
  }

  remove(id: number) {
    return `This action removes a #${id} competitionItemSort`;
  }
}
