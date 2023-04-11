import { Controller, Get } from '@nestjs/common';
import { HumanResourceManagementService } from './human_resource_management.service';

@Controller()
export class HumanResourceManagementController {
  constructor(private readonly humanResourceManagementService: HumanResourceManagementService) {}

  @Get()
  getHello(): string {
    return this.humanResourceManagementService.getHello();
  }
}
