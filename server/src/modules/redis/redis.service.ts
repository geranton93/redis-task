import { Inject, Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService {
    private readonly redis: Redis;

    constructor(@Inject('REDIS_INSTANCE') redis: Redis) {
        this.redis = redis;
    }

    public async getRedisClient(): Promise<Redis> {
        return this.redis;
    }

    public async subscribeWithPattern(pattern: string): Promise<Redis> {
        this.redis.psubscribe(pattern);
        return this.redis;
    }

    public async unsubscribeWithPattern(pattern: string): Promise<Redis> {
        this.redis.punsubscribe(pattern);
        return this.redis;
    }

    public async executeOnEvent(
        callback: (pattern: string, channel: string, message: string) => void
    ): Promise<Redis> {
        return this.redis.on('pmessage', callback);
    }
}
