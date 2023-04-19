import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { RmqService } from '@app/common';
import { RmqOptions } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { AppCongiguration } from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.REDIS,
  //   options: {
  //     host: 'localhost',
  //     port: 6379,
  //   },
  // })
  // const rmqService = app.get<RmqService>(RmqService);
  // app.connectMicroservice<RmqOptions>(rmqService.getOptions('AUTH', true));
  AppCongiguration(app)
  const configService = app.get(ConfigService);
  await app.startAllMicroservices();
  await app.listen(configService.get('PORT'));
}
bootstrap();
