import { Body, Inject, Injectable, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { USER_MANAGEMENT } from './constants/services';
import { Request } from 'express';

@Injectable()
export class ErpSolutionService {
  constructor(@Inject(USER_MANAGEMENT) private readonly userManagementClient: ClientProxy) { }
  async getHello(): Promise<string> { // need to use async because we need to wait recieved data

    let recieve = await this.userManagementClient.send<number>("notify", { user: "Ali", data: { a: 1, b: 2 } }).toPromise();// notify if mapped key will used to in other hand 
    // without toPromise function will return Observable and will not see execute before subscribe so when convert to Promise will recieve data in variable 

    return "\t add 1+2=" + recieve;
  }

  async createUser(request: Request) {
    try {
      console.log("erp sol serv: ", request)
      const user = await this.userManagementClient.send('createUser', {
        request,
      })
      return user;
    } catch (error) {

    }
  }
}
