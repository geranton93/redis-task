import Redis from 'ioredis';
import { ConfigService } from '../config/config.service';
export declare const redisProvider: {
    provide: string;
    useFactory: (configService: ConfigService) => Promise<Redis.Redis>;
    inject: (typeof ConfigService)[];
};
