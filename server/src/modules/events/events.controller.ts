import { Controller, Get } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
    private readonly eventsService: EventsService;

    constructor(eventsService: EventsService) {
        this.eventsService = eventsService;
    }

    @Get('start')
    public async startListenForEvents(): Promise<boolean> {
        try {
            await this.eventsService.subscribe();
            return true;
        } catch (error) {
            return false;
        }
    }

    @Get('stop')
    public async stopListenForEvents(): Promise<boolean> {
        try {
            await this.eventsService.unsubscribe();
            return true;
        } catch (error) {
            return false;
        }
    }
}
