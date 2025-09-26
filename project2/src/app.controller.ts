import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('employee')
export class AppController {
  constructor(private readonly appService: AppService) {}
  

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return `json{userID:${id},name:mani`;
  }

  @Post()
  create(
    @Body()
    body: {
      name: string;
      email: string;
    },
  )
  {
    return `create a new user`;
  }
  
  @Put(':id')
  update(
    @Param('id') id:string,
    @Body()
    body:{
      name?: string;
      email?: string;
    }
  ): string{
    return 'the user for updated'
  }
  
  @Delete(':id')
  remove(@Param('id') id:string){
    return 'delete is success'
  }

}
