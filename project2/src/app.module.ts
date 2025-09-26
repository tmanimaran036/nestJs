import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './customer/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './typeORM/customer/customerORM';
import { FileUploadingController } from './file-uploading/file-uploading.controller';
import { FileUploadingCustomer } from './file-uploading/upload.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      database: 'managementsystem_db',
      username: 'root',
      password: 'root',
      entities: [Customer],
      synchronize: false,
    }),
    UserModule,
  ],
  controllers: [AppController, FileUploadingController, FileUploadingCustomer],
  providers: [AppService],
})
export class AppModule {}
