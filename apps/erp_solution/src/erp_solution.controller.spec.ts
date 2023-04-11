import { Test, TestingModule } from '@nestjs/testing';
import { ErpSolutionController } from './erp_solution.controller';
import { ErpSolutionService } from './erp_solution.service';

describe('ErpSolutionController', () => {
  let erpSolutionController: ErpSolutionController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ErpSolutionController],
      providers: [ErpSolutionService],
    }).compile();

    erpSolutionController = app.get<ErpSolutionController>(ErpSolutionController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(erpSolutionController.getHello()).toBe('Hello World!');
    });
  });
});
