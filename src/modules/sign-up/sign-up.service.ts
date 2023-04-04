import { Injectable } from '@nestjs/common';
import { CreateSignUpDto } from './dto/create-sign-up.dto';
import { UpdateSignUpDto } from './dto/update-sign-up.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignUp } from './entities/sign-up.entity';
@Injectable()
export class SignUpService {
  constructor(
    @InjectRepository(SignUp)
    private repository: Repository<SignUp>
  ) {}

  create(createUserDto: CreateSignUpDto) {
    return this.repository.save(createUserDto);

  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.find({where:{}});

  }

  update(updateSignUpDto: UpdateSignUpDto) {
    return this.repository.update({sign_up_id:updateSignUpDto.sign_up_id},updateSignUpDto);

  }

  remove(delDto: any) {
    return this.repository.delete(delDto)
  }
}
