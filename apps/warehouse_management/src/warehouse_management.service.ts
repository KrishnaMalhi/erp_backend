import { Injectable } from '@nestjs/common';

@Injectable()
export class WarehouseManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
