import { NestFactory } from '@nestjs/core';
import { UserManagementModule } from './user_management.module';
import { AppCongiguration } from './config/app.config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { logger } from './utils/logger.utils';

async function bootstrap() {
  const app = await NestFactory.create(UserManagementModule, { logger });
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.REDIS,
    options: {
      host: 'localhost',
      port: 6379,
    },
  })
  const configService = app.get(ConfigService);
  AppCongiguration(app)
  await app.startAllMicroservices()
  await app.listen(configService.get('PORT'));
}
bootstrap();

// const app = await NestFactory.createMicroservice<MicroserviceOptions>(UserManagementModule, {

//   transport: Transport.REDIS,
//   options: {
//     host: 'localhost',
//     port: 6379,
//   },
// });


// app.connectMicroservice<MicroserviceOptions>({
//   transport: Transport.REDIS,
//   options: {
//     host: 'localhost',
//     port: 6379,
//   },
// })
// await app.startAllMicroservices()