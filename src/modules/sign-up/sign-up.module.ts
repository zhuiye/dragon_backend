import { Module } from '@nestjs/common';
import { SignUpService } from './sign-up.service';
import { SignUpController } from './sign-up.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignUp } from './entities/sign-up.entity';
import { Team } from '../team/entities/team.entity';
import { Player } from '../player/player.entity';
import { PlayerService } from '../player/player.service';
import { PlayerModule } from '../player/player.module';
import { TeamModule } from '../team/team.module';
import { CompetitionModule } from '../competition/competition.module';


@Module({
  imports: [TypeOrmModule.forFeature([SignUp]),PlayerModule,TeamModule,CompetitionModule],
  controllers: [SignUpController],
  providers: [SignUpService]
})
export class SignUpModule {}
