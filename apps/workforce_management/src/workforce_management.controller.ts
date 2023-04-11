import { Controller, Get } from '@nestjs/common';
import { WorkforceManagementService } from './workforce_management.service';

@Controller()
export class WorkforceManagementController {
  constructor(private readonly workforceManagementService: WorkforceManagementService) {}

  @Get()
  getHello(): string {
    return this.workforceManagementService.getHello();
  }
}
