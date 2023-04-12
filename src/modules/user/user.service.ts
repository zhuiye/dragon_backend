import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private repository: Repository<User>
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.repository.save(createUserDto);

  }

  findAll(query:any) {
    return this.repository.find({where:query});
  }

  findOne(id: number) {
    return this.repository.find({where:{user_id:id}});
  }

  update(updateUserDto: UpdateUserDto) {
    return this.repository.update({user_id:updateUserDto.user_id},updateUserDto);

  }

  remove(delDto: any) {
    return this.repository.delete(delDto)
  }
}
