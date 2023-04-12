import { Module } from '@nestjs/common';
import { RoleInterfaceService } from './role.service';
import { RoleInterfaceController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  controllers: [RoleInterfaceController],
  providers: [RoleInterfaceService],
  exports:[RoleInterfaceService]
})
export class RoleModule {}
