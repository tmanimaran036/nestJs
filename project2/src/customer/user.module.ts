import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from 'src/typeORM/customer/customerORM';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
