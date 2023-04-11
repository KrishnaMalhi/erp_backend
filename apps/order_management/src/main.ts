import { NestFactory } from '@nestjs/core';
import { OrderManagementModule } from './order_management.module';

async function bootstrap() {
  const app = await NestFactory.create(OrderManagementModule);
  await app.listen(3000);
}
bootstrap();
