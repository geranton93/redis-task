import { Inject, Injectable } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

@Injectable()
export class WsService {
    private readonly wss: Server;

    constructor(@Inject('WEBSOCKET_SERVER') wss: Server) {
        this.wss = wss;

        this.log();
    }

    public async log() {
        try {
            await this.wss.on('connection', (socket: Socket) => {
                socket.emit('message', `${socket.id} connected`);
            });
        } catch (error) {
            throw error;
        }
    }

    public async emitForUser(event: string, ...args: any[]): Promise<void> {
        try {
            await Promise.resolve(this.wss).then((wss: Server) => {
                wss.emit(event, ...args);
            });
        } catch (error) {
            throw error;
        }
    }
}
