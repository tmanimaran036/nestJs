import {
  Controller,
  Get,
  Put,
  Param,
  Body,
  Delete,
  Post,
  ParseIntPipe,
} from '@nestjs/common';
import { Customer } from 'src/typeORM/customer/customerORM';
import { UserService } from './user.service';
import { CustomerCreateDTO } from 'src/dtos/customer/customerC';

@Controller('/customer/details')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll() {
    console.log('enter get method');
    return this.userService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() customerData: CustomerCreateDTO) {
    return this.userService.create(customerData);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() customerData: Partial<Customer>,
  ) {
    return this.userService.update(id, customerData);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
