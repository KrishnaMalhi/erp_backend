import { Injectable } from '@nestjs/common';

@Injectable()
export class InventoryManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
