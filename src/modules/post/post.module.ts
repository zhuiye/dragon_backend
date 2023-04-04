import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {DragonPost} from './post.entity'

@Module({
  imports: [TypeOrmModule.forFeature([DragonPost])],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
