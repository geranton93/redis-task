import { RedisService } from '../redis/redis.service';
import { WsService } from '../socket/socket.service';
export declare class EventsService {
    private readonly pattern;
    private readonly redisService;
    private readonly wsService;
    constructor(redisService: RedisService, wsService: WsService);
    subscribe(): Promise<void>;
    unsubscribe(): Promise<void>;
    emitEvent(): Promise<void>;
}
