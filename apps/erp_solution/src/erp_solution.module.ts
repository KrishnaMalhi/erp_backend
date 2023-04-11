import { Module } from '@nestjs/common';
import { ErpSolutionController } from './erp_solution.controller';
import { ErpSolutionService } from './erp_solution.service';

@Module({
  imports: [],
  controllers: [ErpSolutionController],
  providers: [ErpSolutionService],
})
export class ErpSolutionModule {}
