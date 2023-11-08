import Redis from 'ioredis';
import { ConfigService } from '../config/config.service';

export const redisProvider = {
    provide: 'REDIS_INSTANCE',
    useFactory: async (configService: ConfigService): Promise<Redis> => {
        const url = configService.get('REDIS_URL');

        return new Redis(url);
    },
    inject: [ConfigService]
};
