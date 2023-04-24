import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { JwtService } from '@nestjs/jwt';
import { USER_MANAGEMENT } from '@app/common/utils/services.constant.utils';
import { UserInterface } from 'apps/user_management/src/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    @Inject(USER_MANAGEMENT) private readonly userManagementService: ClientProxy,
    private readonly jwtService: JwtService,
  ) { }

  async login(payload: any): Promise<string> {
    const user = await this.validateUser(payload.email, payload.password, payload.channel, "authenticateUser");
    if (!user) {
      throw new Error('User not found');
    }
    const payloadJwt = { username: user.email, sub: user.id };
    return this.jwtService.sign(payloadJwt);
  }
  private async validateUser(
    email: string,
    password: string,
    channel: string,
    api: string
  ): Promise<any> {
    const user = await this.userManagementService
      .send(api, { email, password, channel })
      .toPromise();
    console.log("user: ", user)
    // if (!user.success) {
    //   throw new Error('User not found');
    // }

    return user;
  }

  async signUp(payload: any): Promise<string> {
    const user = await this.validateUser(payload.email, payload.password, payload.channel, "createUser");
    if (!user) {
      throw new Error('User not found');
    }
    const payloadJwt = { username: user.email, sub: user.id };
    return this.jwtService.sign(payloadJwt);
  }
}