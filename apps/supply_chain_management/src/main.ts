import { NestFactory } from '@nestjs/core';
import { SupplyChainManagementModule } from './supply_chain_management.module';

async function bootstrap() {
  const app = await NestFactory.create(SupplyChainManagementModule);
  await app.listen(3000);
}
bootstrap();
