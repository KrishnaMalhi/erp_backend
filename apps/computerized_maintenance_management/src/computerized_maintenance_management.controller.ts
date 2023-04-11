import { Controller, Get } from '@nestjs/common';
import { ComputerizedMaintenanceManagementService } from './computerized_maintenance_management.service';

@Controller()
export class ComputerizedMaintenanceManagementController {
  constructor(private readonly computerizedMaintenanceManagementService: ComputerizedMaintenanceManagementService) {}

  @Get()
  getHello(): string {
    return this.computerizedMaintenanceManagementService.getHello();
  }
}
