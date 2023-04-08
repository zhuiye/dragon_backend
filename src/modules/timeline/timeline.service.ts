import { Injectable } from '@nestjs/common';
import { CreateTimelineDto } from './dto/create-timeline.dto';
import { UpdateTimelineDto } from './dto/update-timeline.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Timeline } from './entities/timeline.entity';
import { Repository } from 'typeorm';



@Injectable()
export class TimelineService {
  constructor(
    @InjectRepository(Timeline)
    private repository: Repository<Timeline>
  ) {}

  create(createTimelineDto: CreateTimelineDto) {
    return this.repository.save(createTimelineDto);

  }

  findAll(query) {
    return this.repository.find({where:query});

  }

  findOne(id: number) {
    return this.repository.find({where:{}});

  }

  update( updateTimelineDto: UpdateTimelineDto) {
    return this.repository.update({timeline_id:updateTimelineDto.timeline_id},updateTimelineDto);

  }

  remove(delDto: any) {
    return this.repository.delete(delDto)

  }
}
