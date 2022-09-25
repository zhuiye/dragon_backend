import { Constant } from 'src/constant';
import { DataSource } from 'typeorm';
import { Competition } from '../entities/competition.entity';

export const competitionProviders = [
  {
    provide: Constant.COMPETITION_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Competition),
    inject: [Constant.DATA_SOURCE],
  },
];