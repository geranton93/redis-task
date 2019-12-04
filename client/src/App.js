import React from 'react';
import { Container } from '@material-ui/core';

import socket from './libs/sockets';
import axios from './libs/axios';

// Components
import EventList from './components/Events/EventList/EventList';

const App = () => {
    return (
        <div className="App">
            <Container>
                <EventList socket={socket} axios={axios} />
            </Container>
        </div>
    );
};

export default App;
