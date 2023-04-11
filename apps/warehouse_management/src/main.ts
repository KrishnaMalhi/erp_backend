import { NestFactory } from '@nestjs/core';
import { WarehouseManagementModule } from './warehouse_management.module';

async function bootstrap() {
  const app = await NestFactory.create(WarehouseManagementModule);
  await app.listen(3000);
}
bootstrap();
