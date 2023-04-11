import { Test, TestingModule } from '@nestjs/testing';
import { ComputerizedMaintenanceManagementController } from './computerized_maintenance_management.controller';
import { ComputerizedMaintenanceManagementService } from './computerized_maintenance_management.service';

describe('ComputerizedMaintenanceManagementController', () => {
  let computerizedMaintenanceManagementController: ComputerizedMaintenanceManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ComputerizedMaintenanceManagementController],
      providers: [ComputerizedMaintenanceManagementService],
    }).compile();

    computerizedMaintenanceManagementController = app.get<ComputerizedMaintenanceManagementController>(ComputerizedMaintenanceManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(computerizedMaintenanceManagementController.getHello()).toBe('Hello World!');
    });
  });
});
