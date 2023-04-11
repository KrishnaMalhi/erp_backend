import { Controller, Get } from '@nestjs/common';
import { CustomerRelationshipManagementService } from './customer_relationship_management.service';

@Controller()
export class CustomerRelationshipManagementController {
  constructor(private readonly customerRelationshipManagementService: CustomerRelationshipManagementService) {}

  @Get()
  getHello(): string {
    return this.customerRelationshipManagementService.getHello();
  }
}
