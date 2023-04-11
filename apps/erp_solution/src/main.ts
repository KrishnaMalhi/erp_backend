import { NestFactory } from '@nestjs/core';
import { ErpSolutionModule } from './erp_solution.module';

async function bootstrap() {
  const app = await NestFactory.create(ErpSolutionModule);
  await app.listen(3000);
}
bootstrap();
