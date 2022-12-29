import { Module,Global} from '@nestjs/common';


const devConfig={
    name:'i man dev',
    author:'hengcheng'
 }
 
 const prodConfig={
   name:'i man dev',
   author:'hengcheng'
 }
 
 const configFactory = {
   provide: 'CONFIG',
   useFactory: () => {
     return process.env.NODE_ENV === 'development' ? devConfig : prodConfig;
   },
 };
 
@Global()
@Module({  
  providers: [
    configFactory
  ],
  exports: ['CONFIG'],
})
export class GlobalModule {}