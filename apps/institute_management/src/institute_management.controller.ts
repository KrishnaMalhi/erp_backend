import { Controller, Get } from '@nestjs/common';
import { InstituteManagementService } from './institute_management.service';

@Controller()
export class InstituteManagementController {
  constructor(private readonly instituteManagementService: InstituteManagementService) {}

  @Get()
  getHello(): string {
    return this.instituteManagementService.getHello();
  }
}
