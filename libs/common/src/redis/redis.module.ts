import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisService } from './redis.service';

@Module({
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {
  static register(): DynamicModule {
    return {
      module: RedisModule,
      imports: [ConfigModule],
      providers: [RedisService],
      exports: [RedisService],
    };
  }
}