import { NestFactory } from '@nestjs/core';
import { ErpSolutionModule } from './erp_solution.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(ErpSolutionModule)
  app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.TCP,
      // options: {
      //   host: 'localhost',
      //   port: 6379,
      // },
    })
  await app.startAllMicroservices();
  await app.listen(9000);
}
bootstrap();
