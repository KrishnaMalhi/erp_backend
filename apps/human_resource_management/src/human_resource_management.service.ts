import { Injectable } from '@nestjs/common';

@Injectable()
export class HumanResourceManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
