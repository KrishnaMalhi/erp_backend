import { Test, TestingModule } from '@nestjs/testing';
import { HumanResourceManagementController } from './human_resource_management.controller';
import { HumanResourceManagementService } from './human_resource_management.service';

describe('HumanResourceManagementController', () => {
  let humanResourceManagementController: HumanResourceManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HumanResourceManagementController],
      providers: [HumanResourceManagementService],
    }).compile();

    humanResourceManagementController = app.get<HumanResourceManagementController>(HumanResourceManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(humanResourceManagementController.getHello()).toBe('Hello World!');
    });
  });
});
