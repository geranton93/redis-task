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
        try {
            this.redis.psubscribe(pattern);
            return this.redis;
        } catch (error) {
            throw error;
        }
    }

    public async unsubscribeWithPattern(pattern: string): Promise<Redis> {
        try {
            this.redis.punsubscribe(pattern);
            return this.redis;
        } catch (error) {
            throw error;
        }
    }

    public async executeOnEvent(callback: (pattern: string, channel: string, message: string) => void): Promise<Redis> {
        try {
            return this.redis.on('pmessage', callback);
        } catch (error) {
            throw error;
        }
    }
}
