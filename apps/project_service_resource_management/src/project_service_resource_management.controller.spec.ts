import { Test, TestingModule } from '@nestjs/testing';
import { ProjectServiceResourceManagementController } from './project_service_resource_management.controller';
import { ProjectServiceResourceManagementService } from './project_service_resource_management.service';

describe('ProjectServiceResourceManagementController', () => {
  let projectServiceResourceManagementController: ProjectServiceResourceManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProjectServiceResourceManagementController],
      providers: [ProjectServiceResourceManagementService],
    }).compile();

    projectServiceResourceManagementController = app.get<ProjectServiceResourceManagementController>(ProjectServiceResourceManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(projectServiceResourceManagementController.getHello()).toBe('Hello World!');
    });
  });
});
