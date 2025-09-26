import {
  CanActivate,
  UnauthorizedException,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { jwtConstants } from 'src/athu/auth.constants';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { console } from 'inspector';

@Injectable()
export class AuthGUARD implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.jwtVerification(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });
      request['user'] = payload;

      
    } catch {
      throw new ForbiddenException();
    }

    if(request['user'].role === 'admin')
    {
      return true;
    }
    console.log(request['user']);

    return false
  }

  private jwtVerification(request: Request): string | undefined {
    const authorHeader = request.headers['authorization'];
    return authorHeader && authorHeader.startsWith('Bearer')
      ? authorHeader.split(' ')[1]
      : undefined;
  }
}
