import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { AppCongiguration } from './config/app.config';
import { RedisService } from '@app/common/redis/redis.service';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const redisService = app.get<RedisService>(RedisService);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.REDIS,
    options: { ...redisService }
  })
  AppCongiguration(app)
  const configService = app.get(ConfigService);
  await app.startAllMicroservices();
  await app.listen(configService.get('PORT'));
}
bootstrap();
