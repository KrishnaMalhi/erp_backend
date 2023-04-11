import { NestFactory } from '@nestjs/core';
import { ComputerizedMaintenanceManagementModule } from './computerized_maintenance_management.module';

async function bootstrap() {
  const app = await NestFactory.create(ComputerizedMaintenanceManagementModule);
  await app.listen(3000);
}
bootstrap();
