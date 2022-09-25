import { Constant } from 'src/constant';
import { DataSource } from 'typeorm';
export const databaseProviders = [
    {
      provide: Constant.DATA_SOURCE,
      useFactory: async () => {
        const dataSource = new DataSource({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'password',
          database: 'dragon_sys',
          entities: [
              __dirname + '/../**/*.entity{.ts,.js}',
          ],
          synchronize: true,
        });
  
        return dataSource.initialize();
      },
    },
  ];