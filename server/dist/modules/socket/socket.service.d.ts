import { Server } from 'socket.io';
export declare class WsService {
    private readonly wss;
    constructor(wss: Server);
    log(): Promise<void>;
    emitForUser(event: string, ...args: any[]): Promise<void>;
}
