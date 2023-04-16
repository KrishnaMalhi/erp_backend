import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from "@nestjs/microservices";
import { ErpSolutionController } from './erp_solution.controller';
import { ErpSolutionService } from './erp_solution.service';

@Module({
  imports: [ClientsModule.register([
    {
      name: "USER_MANAGEMENT_SERVICE",
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379
      }
    },
    {
      name: "INSTITUTE_MANAGEMENT_SERVICE",
      transport: Transport.REDIS,
      options: {
        host: "locahost",
        port: 6379,
      }
    }
  ])],
  controllers: [ErpSolutionController],
  providers: [ErpSolutionService],
})
export class ErpSolutionModule { }
