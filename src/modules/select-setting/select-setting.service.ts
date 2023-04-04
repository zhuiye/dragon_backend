import { Injectable } from '@nestjs/common';
import { CreateSelectSettingDto } from './dto/create-select-setting.dto';
import { UpdateSelectSettingDto } from './dto/update-select-setting.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SelectSetting } from './entities/select-setting.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SelectSettingService {
  constructor(
    @InjectRepository(SelectSetting)
    private repository: Repository<SelectSetting>
  ) {}

  create(createUserDto: CreateSelectSettingDto) {
    return this.repository.save(createUserDto);

  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.find({where:{}});

  }

  update(updateUpDto: UpdateSelectSettingDto) {
    return this.repository.update({id:updateUpDto.id},updateUpDto);

  }

  remove(delDto: any) {
    return this.repository.delete(delDto)
  }
}
