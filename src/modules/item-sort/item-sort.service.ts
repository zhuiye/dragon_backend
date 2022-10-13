import { Injectable } from '@nestjs/common';
import { CreateItemSortDto } from './dto/create-item-sort.dto';
import { UpdateItemSortDto } from './dto/update-item-sort.dto';
import {ItemSort} from './item-sort.entity'
import {Item} from '../item/item.entity'
import { Repository, } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class ItemSortService {
  constructor(
    @InjectRepository(ItemSort)
    private readonly ItemSortRepository: Repository<ItemSort>,
    @InjectRepository(Item)
    private readonly competitionItemRepository: Repository<Item>
  ) {}

  async create(createItemSortDto: CreateItemSortDto) {
    
    const id=createItemSortDto.item_id;
    
    const newItemSort=await  this.ItemSortRepository.save(createItemSortDto)
    
    const competitionItem=await this.competitionItemRepository.findOne({where:{item_id:id,},relations:['competition_item_sort']})
    
    competitionItem.item_sort.push(newItemSort)

     await this.competitionItemRepository.save(competitionItem)
    

    return newItemSort
  }

  getRelation(id:any){
    return this.ItemSortRepository.find({
      where:{item_inner_id:id,},
      relations:["competition_item"]
    })
  }

  findAll() {
    return this.ItemSortRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} ItemSort`;
  }

  update(id: number, updateItemSortDto: UpdateItemSortDto) {
    return `This action updates a #${id} ItemSort`;
  }

  remove(id: number) {
    return `This action removes a #${id} ItemSort`;
  }
}
