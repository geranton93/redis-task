import { Module } from '@nestjs/common';
import { RedisModule } from '../redis/redis.module';
import { SocketModule } from '../socket/socket.module';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';

@Module({
    imports: [RedisModule, SocketModule],
    providers: [EventsService],
    controllers: [EventsController],
    exports: [EventsService]
})
export class EventsModule {}
