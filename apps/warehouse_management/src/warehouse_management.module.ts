import { Module } from '@nestjs/common';
import { WarehouseManagementController } from './warehouse_management.controller';
import { WarehouseManagementService } from './warehouse_management.service';

@Module({
  imports: [],
  controllers: [WarehouseManagementController],
  providers: [WarehouseManagementService],
})
export class WarehouseManagementModule {}
