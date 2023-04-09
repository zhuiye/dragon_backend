import { Injectable } from '@nestjs/common';
import { CreateCheckListDto } from './dto/create-check-list.dto';
import { UpdateCheckListDto } from './dto/update-check-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CheckList } from './entities/check-list.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CheckListService {
  constructor(
    @InjectRepository(CheckList)
    private repository: Repository<CheckList>
  ) {}
  create(createCheckListDto: CreateCheckListDto) {
    return this.repository.save(createCheckListDto);
  }

  findAll(query:any) {
    return this.repository.find({where:query});
  }

  findOne(id: number) {
    return this.repository.find({where:{check_id:id}});
  }

  update( updateCheckListDto: UpdateCheckListDto) {

    return this.repository.update({check_id:updateCheckListDto.check_id},updateCheckListDto);

  }

 remove(delDto:any) {
    return this.repository.delete(delDto)

  }
}
