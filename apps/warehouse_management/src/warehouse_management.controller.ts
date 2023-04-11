import { Controller, Get } from '@nestjs/common';
import { WarehouseManagementService } from './warehouse_management.service';

@Controller()
export class WarehouseManagementController {
  constructor(private readonly warehouseManagementService: WarehouseManagementService) {}

  @Get()
  getHello(): string {
    return this.warehouseManagementService.getHello();
  }
}
