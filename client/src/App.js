import React from 'react';
import { Container, Grid } from '@material-ui/core';

import socket from './libs/sockets';
import axios from './libs/axios';

// Components
import { EventList } from './components/Events/EventList/EventList';

const App = () => {
    return (
        <div className="App">
            <Container>
                <Grid container spacing="3" justify="center" alignItems="center">
                    <EventList socket={socket} axios={axios} />
                </Grid>
            </Container>
        </div>
    );
};

export default App;
