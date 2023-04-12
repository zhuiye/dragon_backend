import { Injectable } from '@nestjs/common';
import { CreateRoleInterfaceDto } from './dto/create-role.dto';
import { UpdateRoleInterfaceDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleInterfaceService {
  constructor(
    @InjectRepository(Role)
    private repository: Repository<Role>
  ) {}
  create(createRoleInterfaceDto: CreateRoleInterfaceDto) {
  }

  findAll(query:any) {
    return this.repository.find({where:query});
  }

  findOne(id: number) {
      return this.repository.find({where:{role_id:id}});
  }

  update( updateRoleDto: UpdateRoleInterfaceDto) {
    return this.repository.update({role_id:updateRoleDto.role_id},updateRoleDto);

  }
  remove(delDto: any) {
    return this.repository.delete(delDto)
  }
}
