import { Server } from 'socket.io';
import { ConfigService } from '../config/config.service';

export const wsProvider = {
    provide: 'WEBSOCKET_SERVER',
    useFactory: async (configService: ConfigService): Promise<Server> => {
        const port = configService.get('WS_PORT');
        const io = new Server();
        return io.listen(+port);
    },
    inject: [ConfigService]
};
