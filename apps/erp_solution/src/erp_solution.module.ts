import { Module } from '@nestjs/common';
import { ErpSolutionController } from './erp_solution.controller';
import { ErpSolutionService } from './erp_solution.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { RmqModule } from '@app/common';
import { USER_MANAGEMENT } from './constants/services';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        // MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/erp_solution/.env',
    }),
    ClientsModule.register([
      {
        name: USER_MANAGEMENT,
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379
        }
      },])
    // RmqModule.register({
    //   name: USER_MANAGEMENT,
    // }),
  ],
  controllers: [ErpSolutionController],
  providers: [ErpSolutionService],
})
export class ErpSolutionModule { }

// ClientsModule.register([
//   {
//     name: "AUTH_SERVICE",
//     transport: Transport.REDIS,
//     options: {
//       host: 'localhost',
//       port: 6379
//     }
//   },
//   {
//     name: "USER_MANAGEMENT",
//     transport: Transport.REDIS,
//     options: {
//       host: 'localhost',
//       port: 6379
//     }
//   },
//   {
//     name: "INSTITUTE_MANAGEMENT_SERVICE",
//     transport: Transport.REDIS,
//     options: {
//       host: "locahost",
//       port: 6379,
//     }
//   }
// ])