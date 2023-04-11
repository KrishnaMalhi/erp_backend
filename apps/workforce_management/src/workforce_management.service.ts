import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkforceManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
