import { Test, TestingModule } from '@nestjs/testing';
import { WarehouseManagementController } from './warehouse_management.controller';
import { WarehouseManagementService } from './warehouse_management.service';

describe('WarehouseManagementController', () => {
  let warehouseManagementController: WarehouseManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WarehouseManagementController],
      providers: [WarehouseManagementService],
    }).compile();

    warehouseManagementController = app.get<WarehouseManagementController>(WarehouseManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(warehouseManagementController.getHello()).toBe('Hello World!');
    });
  });
});
