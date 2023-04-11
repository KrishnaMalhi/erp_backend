import { NestFactory } from '@nestjs/core';
import { ManufacturingModule } from './manufacturing.module';

async function bootstrap() {
  const app = await NestFactory.create(ManufacturingModule);
  await app.listen(3000);
}
bootstrap();
