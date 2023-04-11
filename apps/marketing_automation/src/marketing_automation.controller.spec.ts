import { Test, TestingModule } from '@nestjs/testing';
import { MarketingAutomationController } from './marketing_automation.controller';
import { MarketingAutomationService } from './marketing_automation.service';

describe('MarketingAutomationController', () => {
  let marketingAutomationController: MarketingAutomationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MarketingAutomationController],
      providers: [MarketingAutomationService],
    }).compile();

    marketingAutomationController = app.get<MarketingAutomationController>(MarketingAutomationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(marketingAutomationController.getHello()).toBe('Hello World!');
    });
  });
});
