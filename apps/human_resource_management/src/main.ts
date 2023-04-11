import { NestFactory } from '@nestjs/core';
import { HumanResourceManagementModule } from './human_resource_management.module';

async function bootstrap() {
  const app = await NestFactory.create(HumanResourceManagementModule);
  await app.listen(3000);
}
bootstrap();
