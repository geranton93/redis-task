import React from 'react';
import { Container, Grid } from '@material-ui/core';

import socket from './libs/sockets';

// Components
import { EventsList } from './containers';

const App = () => {
    return (
        <div className="App">
            <Container>
                <Grid container spacing="3" justify="center" alignItems="center">
                    <EventsList socket={socket} />
                </Grid>
            </Container>
        </div>
    );
};

export default App;
