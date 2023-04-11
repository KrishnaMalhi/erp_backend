import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectServiceResourceManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
