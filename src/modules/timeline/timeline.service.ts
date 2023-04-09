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

  async updateMultipleRecords(updateRecord: any[]) {
    const queryRunner = this.repository.manager.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
  
    try {
      for (const record of updateRecord) {
        await queryRunner.manager.update(
          Timeline,
          { competition_id: record.competition_id, item_key: record.item_key, round_type: record.round_type, group_number: record.group_number },
          { assign_list: record.assign_list }
        );
      }
  
      return await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }
  remove(delDto: any) {
    return this.repository.delete(delDto)

  }
}

