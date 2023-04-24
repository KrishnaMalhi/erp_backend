import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis, { RedisOptions } from 'ioredis';

@Injectable()
export class RedisService {
  private readonly redis: Redis;

  constructor(private readonly configService: ConfigService) {
    const redisOptions: RedisOptions = {
      host: this.configService.get<string>('REDIS_HOST'),
      port: this.configService.get<number>('REDIS_PORT'),
      // password: this.configService.get<string>('REDIS_PASSWORD'),
      // db: this.configService.get<number>('REDIS_DB'),
    };
    this.redis = new Redis(redisOptions);
  }

  async set(key: string, value: any): Promise<void> {
    const serializedValue = JSON.stringify(value);
    await this.redis.setbit(key, 1000, serializedValue);
    // await this.redis.set(key, serializedValue);
  }

  async get<T>(key: string): Promise<T | null> {
    const serializedValue = await this.redis.get(key);
    if (serializedValue === null) {
      return null;
    }
    const deserializedValue: T = JSON.parse(serializedValue);
    return deserializedValue;
  }

  async del(key: string): Promise<void> {
    await this.redis.del(key);
  }
}


// import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { RedisContext, RedisOptions, Transport } from '@nestjs/microservices';

// @Injectable()
// export class RedisService {
//   constructor(private readonly configService: ConfigService) { }

//   getOptions(topic: string): RedisOptions {
//     return {
//       transport: Transport.REDIS,
//       options: {
//         host: this.configService.get<string>('REDIS_HOST'),
//         port: this.configService.get<number>('REDIS_PORT'),
//       },
//     };
//   }

//   ack(context: RedisContext) {
//     // Redis does not use message acknowledgement
//   }
// }
