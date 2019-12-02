import * as io from 'socket.io';
import { ConfigService } from '../config/config.service';
export declare const wsProvider: {
    provide: string;
    useFactory: (configService: ConfigService) => Promise<io.Server>;
    inject: (typeof ConfigService)[];
};
