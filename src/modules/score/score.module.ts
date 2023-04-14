import { Module } from '@nestjs/common';
import { ScoreService } from './score.service';
import { ScoreController } from './score.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Score } from './entities/score.entity';
import { TeamModule } from '../team/team.module';
import { UserModule } from '../user/user.module';
import { RoleModule } from '../role/role.module';

@Module({
  imports: [TypeOrmModule.forFeature([Score]),TeamModule,UserModule,RoleModule],
  controllers: [ScoreController],
  providers: [ScoreService]
})
export class ScoreModule {}
