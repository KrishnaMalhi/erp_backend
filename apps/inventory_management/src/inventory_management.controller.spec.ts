import { Test, TestingModule } from '@nestjs/testing';
import { InventoryManagementController } from './inventory_management.controller';
import { InventoryManagementService } from './inventory_management.service';

describe('InventoryManagementController', () => {
  let inventoryManagementController: InventoryManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [InventoryManagementController],
      providers: [InventoryManagementService],
    }).compile();

    inventoryManagementController = app.get<InventoryManagementController>(InventoryManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(inventoryManagementController.getHello()).toBe('Hello World!');
    });
  });
});
