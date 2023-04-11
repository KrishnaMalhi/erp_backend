import { Controller, Get } from '@nestjs/common';
import { OrderManagementService } from './order_management.service';

@Controller()
export class OrderManagementController {
  constructor(private readonly orderManagementService: OrderManagementService) {}

  @Get()
  getHello(): string {
    return this.orderManagementService.getHello();
  }
}
