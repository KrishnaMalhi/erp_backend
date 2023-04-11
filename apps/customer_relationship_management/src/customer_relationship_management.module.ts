import { Module } from '@nestjs/common';
import { CustomerRelationshipManagementController } from './customer_relationship_management.controller';
import { CustomerRelationshipManagementService } from './customer_relationship_management.service';

@Module({
  imports: [],
  controllers: [CustomerRelationshipManagementController],
  providers: [CustomerRelationshipManagementService],
})
export class CustomerRelationshipManagementModule {}
