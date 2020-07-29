import React from 'react';
import { Container, Grid } from '@material-ui/core';

import socket from './libs/sockets';

// Components
import { EventsContainer } from './containers/Events';

const App = () => {
    return (
        <div className="App">
            <Container>
                <Grid container spacing={3} justify="center" alignItems="center">
                    <EventsContainer socket={socket} />
                </Grid>
            </Container>
        </div>
    );
};

export default App;
