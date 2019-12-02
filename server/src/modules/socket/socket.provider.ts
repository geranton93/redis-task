import * as io from 'socket.io';
import { ConfigService } from '../config/config.service';

export const wsProvider = {
    provide: 'WEBSOCKET_SERVER',
    useFactory: async (configService: ConfigService): Promise<io.Server> => {
        const port = configService.get('WS_PORT');

        return io.listen(port);
    },
    inject: [ConfigService]
};
