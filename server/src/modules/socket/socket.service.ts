import { Inject, Injectable } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

@Injectable()
export class WsService {
    private readonly wss: Server;
    private socket: Socket;

    constructor(@Inject('WEBSOCKET_SERVER') wss: Server) {
        this.wss = wss;

        this.establishConnection();
    }

    public async establishConnection() {
        this.wss.on('connection', (socket: Socket) => {
            this.socket = socket;
            this.socket.emit('message', `${socket.id} connected`);
        });
    }

    public async emitForUser(event: string, ...args: any[]): Promise<void> {
        this.socket.emit(event, ...args);
    }
}
