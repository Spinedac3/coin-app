import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../users/dtos';

@Injectable()
export class AuthService {
  constructor(
    private readonly users: UsersService,
    private readonly jwt: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.users.validate(dto);
    if (!user) throw new UnauthorizedException('Credenciales inválidas');
    return { token: this.jwt.sign({ sub: user.id }) };
  }
}
