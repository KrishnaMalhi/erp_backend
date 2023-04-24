import { AUTH_SERVICE } from '@app/common/auth/services';
import { USER_MANAGEMENT } from '@app/common/utils/services.constant.utils';
import { Body, Inject, Injectable, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Request } from 'express';

@Injectable()
export class ErpSolutionService {
  constructor(
    @Inject(USER_MANAGEMENT) private readonly userManagementClient: ClientProxy,
    @Inject(AUTH_SERVICE) private readonly authClient: ClientProxy
  ) { }
  async getHello(): Promise<string> { // need to use async because we need to wait recieved data

    let recieve = await this.userManagementClient.send<number>("notify", { user: "Ali", data: { a: 1, b: 2 } }).toPromise();// notify if mapped key will used to in other hand 
    // without toPromise function will return Observable and will not see execute before subscribe so when convert to Promise will recieve data in variable 

    return "\t add 1+2=" + recieve;
  }

  async createUser(request: Request) {
    const user = await this.userManagementClient.emit('createUser', request)
    return user;
  }
  async loginUser(request: Request) {
    const user = await this.authClient.emit('auth.login', request)
    return user;
  }
}
