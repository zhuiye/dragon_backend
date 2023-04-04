import { Injectable } from '@nestjs/common';
import { CreateDGSettingDto } from './dto/create-d-g-setting.dto';
import { UpdateDGSettingDto } from './dto/update-d-g-setting.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DGSetting } from './entities/d-g-setting.entity';
import { Repository } from 'typeorm';

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
