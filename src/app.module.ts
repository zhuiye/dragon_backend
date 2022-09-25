import { Module } from '@nestjs/common';
import { CompetitionModule } from './competition/competition.module'
// import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    CompetitionModule
  ]
})
export class AppModule {}
