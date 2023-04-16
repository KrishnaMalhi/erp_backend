import { Controller, Get, Logger } from '@nestjs/common';
import { UserManagementService } from './user_management.service';
import { MessagePattern } from '@nestjs/microservices';

interface NotifiyData {
  user: string;
  data: object;
}
@Controller()
export class UserManagementController {
  constructor(private readonly userManagementService: UserManagementService) { }

  @MessagePattern('notify')
  async notify(data: NotifiyData) {
    console.log('send')
    Logger.log("notificatoin data" + data.user);
    let a: number = data.data['a'];
    let b: number = data.data['b'];
    console.log(a, b)
    return a + b;
  }


}
