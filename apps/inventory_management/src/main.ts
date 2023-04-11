import { NestFactory } from '@nestjs/core';
import { InventoryManagementModule } from './inventory_management.module';

async function bootstrap() {
  const app = await NestFactory.create(InventoryManagementModule);
  await app.listen(3000);
}
bootstrap();
