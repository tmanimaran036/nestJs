import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userServices: UsersService) {}

  @Get()
  getAll() {
    return this.userServices.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.userServices.findOne(Number(id));
  }

  @Post()
  create(
    @Body()
    body: {
      username: string;
     password: string;
     role:string;
    },
  ){
    return this.userServices.create(body);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body()
    body: { username?: string; password?: string; },
  ) {
    return this.userServices.update(Number(id), body);
  }
  //  update(@Param('id')id:string,@Body()body:partial<omit<User,'id'>>){ }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userServices.remove(Number(id));
  }
}
