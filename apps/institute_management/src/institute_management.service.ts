import { Injectable } from '@nestjs/common';

@Injectable()
export class InstituteManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
