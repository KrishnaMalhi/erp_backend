import { Module } from '@nestjs/common';
import { HumanResourceManagementController } from './human_resource_management.controller';
import { HumanResourceManagementService } from './human_resource_management.service';

@Module({
  imports: [],
  controllers: [HumanResourceManagementController],
  providers: [HumanResourceManagementService],
})
export class HumanResourceManagementModule {}
