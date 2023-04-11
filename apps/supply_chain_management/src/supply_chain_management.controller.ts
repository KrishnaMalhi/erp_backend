import { Controller, Get } from '@nestjs/common';
import { SupplyChainManagementService } from './supply_chain_management.service';

@Controller()
export class SupplyChainManagementController {
  constructor(private readonly supplyChainManagementService: SupplyChainManagementService) {}

  @Get()
  getHello(): string {
    return this.supplyChainManagementService.getHello();
  }
}
