import { NestFactory } from '@nestjs/core';
import { ErpSolutionModule } from './erp_solution.module';
import { MicroserviceOptions, RmqOptions, Transport } from '@nestjs/microservices';
import { RmqService } from '@app/common';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ErpSolutionModule)
  app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      },
    })
  // const rmqService = app.get<RmqService>(RmqService);
  // app.connectMicroservice<RmqOptions>(rmqService.getOptions('erp', true));
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  await app.startAllMicroservices();
  await app.listen(configService.get('PORT'));
}
bootstrap();
