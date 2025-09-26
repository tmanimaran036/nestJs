import { Module } from '@nestjs/common';
import { AthuService } from './athu.service';
import { AthuController } from './athu.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth.constants';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '5m' },
    }),
  ],
  controllers: [AthuController],
  providers: [AthuService],
  exports: [AthuService],
})
export class AthuModule {}
