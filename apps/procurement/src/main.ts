import { NestFactory } from '@nestjs/core';
import { ProcurementModule } from './procurement.module';

async function bootstrap() {
  const app = await NestFactory.create(ProcurementModule);
  await app.listen(3000);
}
bootstrap();
