import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req, Put,Inject, Query } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { CreateCompetitionDto, UpdateCompetitionDto } from './dto';

@Controller('competition')
export class CompetitionController {
  constructor(private readonly competitionService: CompetitionService,
    @Inject('CONFIG')
    private  gconfig:any) {}

  @Post()
  async create(@Body() competitionDto: CreateCompetitionDto) {
      return  await this.competitionService.create(competitionDto);
  }

  @Patch()
  async update( @Body() updateDto: UpdateCompetitionDto) {
   return await this.competitionService.update(updateDto);
  }

  @Get()
  async findAll(@Query() query) {
    
     const {current,pageSize,...rest}=query
     const data=await   this.competitionService.findAll(rest);

    return data.reverse().map((item)=>({...item,item_sort_link:JSON.parse(item.item_sort_link)}))
  }

  @Get("dispatch")
  async getDispatch(@Query() query) {
    
    const data=await this.findAll(query)

    const res=[];
    for(let item of data){
      
      item.item_sort_link.forEach((it)=>{
        res.push({
          ...item,
          item_sort_link:it,
          item_key:it.item_id+'-'+it.sort_id,
          rowSpan:item.item_sort_link.length
        })
      })
    }
    return res
  }

  

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.competitionService.findOne(+id);
  }
 

  @Delete()
  async remove( @Body() params :any) {
    return await this.competitionService.remove(params);
  }
}
