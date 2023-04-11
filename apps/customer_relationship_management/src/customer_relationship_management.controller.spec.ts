import { Test, TestingModule } from '@nestjs/testing';
import { CustomerRelationshipManagementController } from './customer_relationship_management.controller';
import { CustomerRelationshipManagementService } from './customer_relationship_management.service';

describe('CustomerRelationshipManagementController', () => {
  let customerRelationshipManagementController: CustomerRelationshipManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CustomerRelationshipManagementController],
      providers: [CustomerRelationshipManagementService],
    }).compile();

    customerRelationshipManagementController = app.get<CustomerRelationshipManagementController>(CustomerRelationshipManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(customerRelationshipManagementController.getHello()).toBe('Hello World!');
    });
  });
});
