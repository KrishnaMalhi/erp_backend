import { NestFactory } from '@nestjs/core';
import { MarketingAutomationModule } from './marketing_automation.module';

async function bootstrap() {
  const app = await NestFactory.create(MarketingAutomationModule);
  await app.listen(3000);
}
bootstrap();
