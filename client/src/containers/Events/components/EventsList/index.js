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

import EventsService from '../../../../services/events.service';

import theme from '../../../../theme';

import { EventsTable } from '..';

import { useStyles } from './styles';

export const EventsList = props => {
    const { socket } = props;

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
            await EventsService.startEvents();
            setEventsStatus(() => 'live');
        } catch (error) {
            console.error(error);
        }
    };

    const unsunbcribeFromEvents = async () => {
        try {
            await EventsService.stopEvents();
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
            <EventsTable eventsList={eventsListState} filter={filterState} />
        </>
    );
};
