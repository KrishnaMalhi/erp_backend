import { Module } from '@nestjs/common';
import { ProjectServiceResourceManagementController } from './project_service_resource_management.controller';
import { ProjectServiceResourceManagementService } from './project_service_resource_management.service';

@Module({
  imports: [],
  controllers: [ProjectServiceResourceManagementController],
  providers: [ProjectServiceResourceManagementService],
})
export class ProjectServiceResourceManagementModule {}
