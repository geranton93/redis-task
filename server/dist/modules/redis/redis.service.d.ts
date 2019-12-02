import { Redis } from 'ioredis';
export declare class RedisService {
    private readonly redis;
    constructor(redis: Redis);
    getRedisClient(): Promise<Redis>;
    subscribeWithPattern(pattern: string): Promise<Redis>;
    unsubscribeWithPattern(pattern: string): Promise<Redis>;
    executeOnEvent(callback: (pattern: string, channel: string, message: string) => void): Promise<Redis>;
}
