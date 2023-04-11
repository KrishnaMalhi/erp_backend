import { Controller, Get } from '@nestjs/common';
import { InventoryManagementService } from './inventory_management.service';

@Controller()
export class InventoryManagementController {
  constructor(private readonly inventoryManagementService: InventoryManagementService) {}

  @Get()
  getHello(): string {
    return this.inventoryManagementService.getHello();
  }
}
