import { Test, TestingModule } from '@nestjs/testing';
import { SupplyChainManagementController } from './supply_chain_management.controller';
import { SupplyChainManagementService } from './supply_chain_management.service';

describe('SupplyChainManagementController', () => {
  let supplyChainManagementController: SupplyChainManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SupplyChainManagementController],
      providers: [SupplyChainManagementService],
    }).compile();

    supplyChainManagementController = app.get<SupplyChainManagementController>(SupplyChainManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(supplyChainManagementController.getHello()).toBe('Hello World!');
    });
  });
});
