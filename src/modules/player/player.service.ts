import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './player.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlayerService {
  
  constructor(
    @InjectRepository(Player)
    private repository: Repository<Player>
  ) {}

  create(createPlayerDto: CreatePlayerDto) {
    return this.repository.save(createPlayerDto );

  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.find({where:{player_id:id}});

  }

  update(updatePlayerDto: UpdatePlayerDto) {
    return this.repository.update({player_id:updatePlayerDto.player_id},updatePlayerDto);

  }

  remove(delDto: any) {
    return this.repository.delete(delDto)
  }
}
