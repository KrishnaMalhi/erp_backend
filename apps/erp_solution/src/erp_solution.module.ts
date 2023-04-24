import { Module } from '@nestjs/common';
import { ErpSolutionController } from './erp_solution.controller';
import { ErpSolutionService } from './erp_solution.service';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { USER_MANAGEMENT } from '@app/common/utils/services.constant.utils';
import { AUTH_SERVICE } from '@app/common/auth/services';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/erp_solution/.env',
    }),
    ClientsModule.register([
      {
        name: AUTH_SERVICE,
        transport: Transport.REDIS,
      },
      {
        name: USER_MANAGEMENT,
        transport: Transport.REDIS,
      },
    ])
  ],
  controllers: [ErpSolutionController],
  providers: [ErpSolutionService],
})
export class ErpSolutionModule { }