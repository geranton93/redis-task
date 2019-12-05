import axios from '../libs/axios';

class EventsService {
    async startEvents() {
        await axios.get('/events/start');
    }

    async stopEvents() {
        await axios.get('/events/stop');
    }
}

export default new EventsService();
