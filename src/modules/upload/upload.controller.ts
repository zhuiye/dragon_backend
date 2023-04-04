import { Controller, Post, UploadedFile, UseInterceptors, } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import {Express} from 'express';
import * as fs from 'fs';
import * as path from 'path';

const sharp = require('sharp');

async function  decodeBufferToPNG(buffer: Buffer): Promise<Buffer> {
  return await sharp(buffer).toFormat('png').toBuffer();
}

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}


  

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<string> {
    const fileName = `${new Date().getTime()}.png`;
    // 注意这个地址...可能后续还要更改，感觉下面的代码太过杂了，chatgpt生成的
    const imagePath = path.join(__dirname, '../../../', 'public/imgs', fileName);
    console.log('imagePath',imagePath)
    return new Promise<string>(async (resolve, reject) => {
      const stream = fs.createWriteStream(imagePath);
      stream.on('error', (error) => reject(error));
      stream.on('finish', () => resolve(`/imgs/${fileName}`));
      const imageBuffer = file.buffer.toString('base64');
      const decodedBuffer = Buffer.from(imageBuffer, 'base64');
      const convertedBuffer =await decodeBufferToPNG(decodedBuffer);
      stream.write(convertedBuffer);
      stream.end();
    });
  }
}
