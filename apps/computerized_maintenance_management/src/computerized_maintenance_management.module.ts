import { Module } from '@nestjs/common';
import { ComputerizedMaintenanceManagementController } from './computerized_maintenance_management.controller';
import { ComputerizedMaintenanceManagementService } from './computerized_maintenance_management.service';

@Module({
  imports: [],
  controllers: [ComputerizedMaintenanceManagementController],
  providers: [ComputerizedMaintenanceManagementService],
})
export class ComputerizedMaintenanceManagementModule {}
