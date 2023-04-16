import { Test, TestingModule } from '@nestjs/testing';
import { InstituteManagementController } from './institute_management.controller';
import { InstituteManagementService } from './institute_management.service';

describe('InstituteManagementController', () => {
  let instituteManagementController: InstituteManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [InstituteManagementController],
      providers: [InstituteManagementService],
    }).compile();

    instituteManagementController = app.get<InstituteManagementController>(InstituteManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(instituteManagementController.getHello()).toBe('Hello World!');
    });
  });
});
