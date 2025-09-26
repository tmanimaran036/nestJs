import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from 'src/typeORM/employees/employeeORM';

@Controller('api/employees')
export class EmployeesController {
  constructor(private readonly employeeService: EmployeesService) {}

  @Get()
  getAll() {
    return this.employeeService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.employeeService.findOne(id);
  }

  @Post()
  create(@Body() employee: Partial<Employee>) {
    return this.employeeService.create(employee);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: Partial<Employee>,
  ) {
    return this.employeeService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.employeeService.remove(id);
  }
}
