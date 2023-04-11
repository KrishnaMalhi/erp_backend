import { NestFactory } from '@nestjs/core';
import { ProjectServiceResourceManagementModule } from './project_service_resource_management.module';

async function bootstrap() {
  const app = await NestFactory.create(ProjectServiceResourceManagementModule);
  await app.listen(3000);
}
bootstrap();
