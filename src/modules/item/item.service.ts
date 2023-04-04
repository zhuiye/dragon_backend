import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import {Item} from './item.entity'

import { Repository, } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private ItemRepository: Repository<Item>
  ) {}

  create(createItemDto: CreateItemDto) {
    return this.ItemRepository.save(createItemDto);
  }


  findAll() {
    return this.ItemRepository.find();
  }

  findOne(id: number) {
    return this.ItemRepository.find({where:{item_id:id}});

  }

  update( updateItemDto: UpdateItemDto) {
    return this.ItemRepository.update({item_id:updateItemDto.item_id},updateItemDto);
  }

  remove(delDto:any) {
    return this.ItemRepository.delete(delDto)
  }
}
