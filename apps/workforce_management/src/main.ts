import { NestFactory } from '@nestjs/core';
import { WorkforceManagementModule } from './workforce_management.module';

async function bootstrap() {
  const app = await NestFactory.create(WorkforceManagementModule);
  await app.listen(3000);
}
bootstrap();
