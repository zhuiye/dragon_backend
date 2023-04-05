import { Injectable } from '@nestjs/common';
import { CreateDGSettingDto } from './dto/create-d-g-setting.dto';
import { UpdateDGSettingDto } from './dto/update-d-g-setting.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DGSetting } from './entities/d-g-setting.entity';
import { Repository } from 'typeorm';

function findDataByRackAndTeam(race_track_number, team_count, data) {
  console.log(race_track_number,team_count,data)
  const obj = data.find((item) => {
    
    return (
      item.race_track_number == race_track_number &&
      item.team_number_start <= team_count &&
      item.team_number_end >= team_count
    );
  });
  console.log(obj)

  return obj || null;
}
@Injectable()
export class DGSettingService {
  constructor(
    @InjectRepository(DGSetting)
    private repository: Repository<DGSetting>
  ) {}

  create(createPlayerDto: CreateDGSettingDto) {
    return this.repository.save(createPlayerDto );

  }

  findAll() {
    return this.repository.find();
  }

  async getFilterValue(params:any){
    const data=await this.repository.find();
    return findDataByRackAndTeam(parseInt(params.race_track_number),parseInt(params.team_count),data)
  }

  findOne(id: number) {
    return this.repository.find({where:{divide_group_id:id}});

  }

  update(updateDto: UpdateDGSettingDto) {
    return this.repository.update({divide_group_id:updateDto.divide_group_id},updateDto);

  }

  remove(delDto: any) {
    return this.repository.delete(delDto)
  }
}
