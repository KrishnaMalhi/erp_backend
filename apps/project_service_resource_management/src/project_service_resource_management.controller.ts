import { Controller, Get } from '@nestjs/common';
import { ProjectServiceResourceManagementService } from './project_service_resource_management.service';

@Controller()
export class ProjectServiceResourceManagementController {
  constructor(private readonly projectServiceResourceManagementService: ProjectServiceResourceManagementService) {}

  @Get()
  getHello(): string {
    return this.projectServiceResourceManagementService.getHello();
  }
}
