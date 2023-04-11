import { Controller, Get } from '@nestjs/common';
import { MarketingAutomationService } from './marketing_automation.service';

@Controller()
export class MarketingAutomationController {
  constructor(private readonly marketingAutomationService: MarketingAutomationService) {}

  @Get()
  getHello(): string {
    return this.marketingAutomationService.getHello();
  }
}
