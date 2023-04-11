import { Module } from '@nestjs/common';
import { OrderManagementController } from './order_management.controller';
import { OrderManagementService } from './order_management.service';

@Module({
  imports: [],
  controllers: [OrderManagementController],
  providers: [OrderManagementService],
})
export class OrderManagementModule {}
