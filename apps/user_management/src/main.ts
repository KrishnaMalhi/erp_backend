import { NestFactory } from '@nestjs/core';
import { UserManagementModule } from './user_management.module';
import { AppCongiguration } from './config/app.config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { logger } from './utils/logger.utils';
import { RedisService } from '@app/common/redis/redis.service';

async function bootstrap() {
  const app = await NestFactory.create(UserManagementModule, { logger });
  const redisService = app.get<RedisService>(RedisService);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.REDIS,
    options: { ...redisService }
  })
  AppCongiguration(app)
  const configService = app.get(ConfigService);
  await app.startAllMicroservices()
  await app.listen(configService.get('PORT'));
}
bootstrap();
