import { Injectable } from '@nestjs/common';

@Injectable()
export class MarketingAutomationService {
  getHello(): string {
    return 'Hello World!';
  }
}
