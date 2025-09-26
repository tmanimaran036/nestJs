import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AthuService {
  constructor(private userService: UsersService,private authJWT:JwtService) {}

  async signIn(username: string, pass: string): Promise<{ access_token:string }> {
    const user = await this.userService.findWithName(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload ={ sub:user.id, username:user.username ,role:user.role};
    return{
        access_token:await this.authJWT.signAsync(payload),
    }
  }
}
