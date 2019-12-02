import { EventsService } from './events.service';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    startListenForEvents(): Promise<boolean>;
    stopListenForEvents(): Promise<boolean>;
}
