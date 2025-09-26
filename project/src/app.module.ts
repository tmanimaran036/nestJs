import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AthuController } from './athu/athu.controller';
import { AthuModule } from './athu/athu.module';

@Module({
  imports: [UsersModule, AthuModule],
  controllers: [AppController, AthuController],
  providers: [AppService],
})
export class AppModule {}
