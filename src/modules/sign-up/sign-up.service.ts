import { Injectable } from '@nestjs/common';
import { CreateSignUpDto } from './dto/create-sign-up.dto';
import { UpdateSignUpDto } from './dto/update-sign-up.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignUp } from './entities/sign-up.entity';
import { Team } from '../team/entities/team.entity';

function mapCount(data) {

  const result = [];
  // 遍历 data 数组
  data.forEach((obj) => {
  
    obj.item_relation.forEach((link) => {
      // 判断 result 数组中是否已存在该 key
      const item = result.find((item) => item.key === link.key);
      if (item) {
        // 如果已存在，则根据 binds 数组长度更新 count
        item.count += link.binds.length > 0 ? 1 : 0;
      } else {
        // 如果不存在，则将该 key 添加到 result 数组中
        result.push({
          key: link.key,
          item_name:link.item_name,
          sort_name:link.sort_name,
          sort_id:link.sort_id,
          item_id:link.item_id,
          count: link.binds.length > 0 ? 1 : 0,
        });
      }
    });
  });
  return result
}
@Injectable()
export class SignUpService {
  constructor(
    @InjectRepository(SignUp)
    private repository: Repository<SignUp>,
  ) {}

  create(createUserDto: CreateSignUpDto) {
    return this.repository.save(createUserDto);

  }

  async findAll(query:any) {
    const data=await this.repository.find({where:query});
    return data.map((item)=>({...item,item_relation:JSON.parse(item.item_relation)}))

  }

  async getSignCount(where:any){
    /*
      
    */
     const data= await this.repository.find({where});
     const obj=data.map((item)=>({...item,item_relation:JSON.parse(item.item_relation)}))
     return mapCount(obj);
    
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
