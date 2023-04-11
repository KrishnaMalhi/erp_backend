import { Test, TestingModule } from '@nestjs/testing';
import { WorkforceManagementController } from './workforce_management.controller';
import { WorkforceManagementService } from './workforce_management.service';

describe('WorkforceManagementController', () => {
  let workforceManagementController: WorkforceManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WorkforceManagementController],
      providers: [WorkforceManagementService],
    }).compile();

    workforceManagementController = app.get<WorkforceManagementController>(WorkforceManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(workforceManagementController.getHello()).toBe('Hello World!');
    });
  });
});
