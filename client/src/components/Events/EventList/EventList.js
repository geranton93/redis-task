import React, { useState, useEffect } from 'react';
import {
    Grid,
    ButtonGroup,
    Button,
    TextField,
    InputAdornment,
    ThemeProvider
} from '@material-ui/core';
import { Search } from '@material-ui/icons';

import theme from '../../../theme';

import { EventTable } from './EventTable/EventsTable';

import { useStyles } from './EventList.styles';

export const EventList = props => {
    const { socket, axios } = props;

    const classes = useStyles();

    const [filterState, setFilterState] = useState('');
    const [eventsListState, setEventsListState] = useState([]);
    const [eventsStatus, setEventsStatus] = useState('pause')

    socket.on('message', data => {
        console.log(data);
    });

    useEffect(() => {
        socket.on('events', data => {
            setEventsListState(prevState => {
                prevState.push(JSON.parse(data));
                if (prevState.length > 20) {
                    prevState.shift();
                }
                return [...prevState];
            });
        });
    }, [socket]);

    const sunbcribeOnEvents = async () => {
        try {
            await axios.get('/events/start');
            setEventsStatus(() => 'live');
        } catch (error) {
            console.error(error);
        }
    };

    const unsunbcribeFromEvents = async () => {
        try {
            await axios.get('/events/stop');
            setEventsStatus(() => 'pause');
        } catch (error) {
            console.error(error);
        }
    };

    const filterEvents = event => {
        event.persist();
        setFilterState(() => event.target.value);
    };

    const getButtonColor = (id) => {
        return id === eventsStatus ? 'primary' : 'default'
    }

    return (
        <>
            <Grid item xs="2" className={classes.actionsBar}>
                <ThemeProvider theme={theme}>
                    <ButtonGroup className={classes.buttonsGroup}>
                        <Button id="live" 
                            color={getButtonColor('live')} 
                            onClick={sunbcribeOnEvents}>Live</Button>
                        <Button id="pause" 
                            color={getButtonColor('pause')} 
                            onClick={unsunbcribeFromEvents}>Pause</Button>
                    </ButtonGroup>
                </ThemeProvider>
            </Grid>
            <Grid item xs="6" className={classes.actionsBar}>
                <TextField
                    className={classes.eventsSearch}
                    type="text"
                    name="searchValue"
                    variant="outlined"
                    placeholder="Search"
                    onChange={filterEvents}
                    inputProps={{ 'aria-label': 'Search' }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <div className={classes.searchIcon}>
                                    <Search />
                                </div>
                            </InputAdornment>
                        )
                    }}
                />
            </Grid>
            <EventTable eventsList={eventsListState} filter={filterState} />
        </>
    );
};
