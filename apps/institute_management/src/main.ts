import { NestFactory } from '@nestjs/core';
import { InstituteManagementModule } from './institute_management.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(InstituteManagementModule, {
    transport: Transport.REDIS,
    options: {
      host: 'localhost',
      port: 6379
    }

  });
  // app.connectMicroservice<MicroserviceOptions>({
  // })
  await app.listen();
}
bootstrap();
