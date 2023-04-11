import { Module } from '@nestjs/common';
import { SupplyChainManagementController } from './supply_chain_management.controller';
import { SupplyChainManagementService } from './supply_chain_management.service';

@Module({
  imports: [],
  controllers: [SupplyChainManagementController],
  providers: [SupplyChainManagementService],
})
export class SupplyChainManagementModule {}
