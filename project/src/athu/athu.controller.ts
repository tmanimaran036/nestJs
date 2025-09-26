import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Get,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AthuService } from './athu.service';
import { AuthGUARD } from 'src/guard/jwt.guard';

class SignInDto {
  username: string;
  password: string;
}
@Controller('auth')
export class AthuController {
  constructor(private readonly auth: AthuService) {}

  @UseGuards(AuthGUARD)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  Singin(@Body() signInDto: SignInDto) {
    return this.auth.signIn(signInDto.username, signInDto.password);
  }
}
