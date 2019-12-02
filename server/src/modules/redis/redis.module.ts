import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { redisProvider } from './redis.provider';
import { RedisService } from './redis.service';

@Module({
    imports: [ConfigModule],
    providers: [redisProvider, RedisService],
    exports: [RedisService]
})
export class RedisModule {}
