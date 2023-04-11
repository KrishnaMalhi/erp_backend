import { Module } from '@nestjs/common';
import { InventoryManagementController } from './inventory_management.controller';
import { InventoryManagementService } from './inventory_management.service';

@Module({
  imports: [],
  controllers: [InventoryManagementController],
  providers: [InventoryManagementService],
})
export class InventoryManagementModule {}
