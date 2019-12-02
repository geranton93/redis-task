// Modules
import { ConfigModule } from './config/config.module';
import { EventsModule } from './events/events.module';
import { RedisModule } from './redis/redis.module';
import { SocketModule } from './socket/socket.module';

export const imports = [
    ConfigModule,
    EventsModule,
    RedisModule,
    SocketModule
];
