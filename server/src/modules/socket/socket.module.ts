import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { wsProvider } from './socket.provider';
import { WsService } from './socket.service';

@Module({
    imports: [ConfigModule],
    providers: [wsProvider, WsService],
    controllers: [],
    exports: [WsService]
})
export class SocketModule {}
