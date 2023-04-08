import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './entities/team.entity';
@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private repository: Repository<Team>
  ) {}

  create(createTeamDto: CreateTeamDto) {
    return this.repository.save(createTeamDto);

  }

  findAll(query:any) {
    return this.repository.find(query);
  }

  findOne(id: number) {
    return this.repository.find({where:{team_id:id}});

  }

  update(updateTeamDto: UpdateTeamDto) {
    return this.repository.update({team_id:updateTeamDto.team_id},updateTeamDto);

  }

  remove(delDto: any) {
    return this.repository.delete(delDto)
  }
}
