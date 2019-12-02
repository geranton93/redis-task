import { Injectable } from '@nestjs/common';
import { RedisService } from '../redis/redis.service';
import { WsService } from '../socket/socket.service';

@Injectable()
export class EventsService {
    private readonly pattern: string;
    private readonly redisService: RedisService;
    private readonly wsService: WsService;

    constructor(redisService: RedisService, wsService: WsService) {
        this.pattern = 'events';
        this.redisService = redisService;
        this.wsService = wsService;

        this.emitEvent();
    }

    public async subscribe(): Promise<void> {
        try {
            await this.redisService.subscribeWithPattern(this.pattern);
        } catch (error) {
            throw error;
        }
    }

    public async unsubscribe(): Promise<void> {
        try {
            await this.redisService.unsubscribeWithPattern(this.pattern);
        } catch (error) {
            throw error;
        }
    }

    public async emitEvent(): Promise<void> {
        try {
            await this.redisService.executeOnEvent(
                async (
                    pattern: string,
                    channel: string,
                    message: string
                ): Promise<void> => {
                    await this.wsService.emitForUser(this.pattern, message);
                }
            );
        } catch (error) {
            throw error;
        }
    }
}
