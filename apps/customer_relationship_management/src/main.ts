import { NestFactory } from '@nestjs/core';
import { CustomerRelationshipManagementModule } from './customer_relationship_management.module';

async function bootstrap() {
  const app = await NestFactory.create(CustomerRelationshipManagementModule);
  await app.listen(3000);
}
bootstrap();
