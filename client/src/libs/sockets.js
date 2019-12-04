import io from 'socket.io-client';

import { sockets as configs } from '../configs'

export default io(configs);