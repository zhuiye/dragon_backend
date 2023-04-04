import { Injectable } from '@nestjs/common';
import { CreateItemSortDto } from './dto/create-item-sort.dto';
import { UpdateItemSortDto } from './dto/update-item-sort.dto';
import {ItemSort} from './item-sort.entity'
import { Repository, } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class ItemSortService {
  constructor(
    @InjectRepository(ItemSort)
    private readonly ItemSortRepository: Repository<ItemSort>
  ) {}

  async create(createItemSortDto: CreateItemSortDto) {
    
    
     return await  this.ItemSortRepository.save(createItemSortDto)

  }

 
  findAll() {
    return this.ItemSortRepository.find();
  }

  findOne(id: number) {
    return this.ItemSortRepository.find({where:{sort_id:id}});

  }

  update(updateItemSortDto: UpdateItemSortDto) {

    return this.ItemSortRepository.update({
      sort_id:(updateItemSortDto.sort_id) 
    },updateItemSortDto)
  }

  remove(delDto: any) {
    
    return this.ItemSortRepository.delete(delDto)

  }
}
