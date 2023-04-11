import { Injectable } from '@nestjs/common';

@Injectable()
export class SupplyChainManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
