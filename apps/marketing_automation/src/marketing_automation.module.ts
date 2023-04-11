import { Module } from '@nestjs/common';
import { MarketingAutomationController } from './marketing_automation.controller';
import { MarketingAutomationService } from './marketing_automation.service';

@Module({
  imports: [],
  controllers: [MarketingAutomationController],
  providers: [MarketingAutomationService],
})
export class MarketingAutomationModule {}
