import { Controller, Get } from '@nestjs/common';
import { ErpSolutionService } from './erp_solution.service';

@Controller()
export class ErpSolutionController {
  constructor(private readonly erpSolutionService: ErpSolutionService) {}

  @Get()
  getHello(): string {
    return this.erpSolutionService.getHello();
  }
}
