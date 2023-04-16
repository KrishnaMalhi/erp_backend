import { Module } from '@nestjs/common';
import { InstituteManagementController } from './institute_management.controller';
import { InstituteManagementService } from './institute_management.service';

@Module({
  imports: [],
  controllers: [InstituteManagementController],
  providers: [InstituteManagementService],
})
export class InstituteManagementModule {}
