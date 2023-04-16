import { NestFactory } from '@nestjs/core';
import { InventoryManagementModule } from './inventory_management.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(InventoryManagementModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.REDIS,
    options: {
      host: "localhost",
      port: 6379,
    }
  })
  await app.startAllMicroservices()
  await app.listen(9002);
}
bootstrap();
