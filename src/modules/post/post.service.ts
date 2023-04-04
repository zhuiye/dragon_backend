import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

import {DragonPost} from './post.entity'
import { Repository } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(DragonPost)
    private PostRepository: Repository<DragonPost>
  ) {}

  create(createPostDto: CreatePostDto) {
    return this.PostRepository.save(createPostDto);

  }

  findAll() {
    return this.PostRepository.find();

  }

  findOne(id: number) {
    return this.PostRepository.find({where:{dragon_post_id:id}});

  }

  update(updateDto: UpdatePostDto) {
    return this.PostRepository.update({dragon_post_id:updateDto.dragon_post_id},updateDto);

  }

  remove(delDto: any) {
    return this.PostRepository.delete(delDto)

  }
}
