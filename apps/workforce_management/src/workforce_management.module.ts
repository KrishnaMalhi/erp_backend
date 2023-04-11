import { Module } from '@nestjs/common';
import { WorkforceManagementController } from './workforce_management.controller';
import { WorkforceManagementService } from './workforce_management.service';

@Module({
  imports: [],
  controllers: [WorkforceManagementController],
  providers: [WorkforceManagementService],
})
export class WorkforceManagementModule {}
