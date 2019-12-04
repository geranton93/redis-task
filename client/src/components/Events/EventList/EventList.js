import React, { useState, useEffect } from 'react';
import {
    ButtonGroup,
    Button,
    TextField,
    InputAdornment
} from '@material-ui/core';
import { Search } from '@material-ui/icons';

import { EventTable } from './EventTable/EventsTable';

import { useStyles } from './EventList.styles';

export const EventList = props => {
    const { socket, axios } = props;

    const classes = useStyles();

    const [filterState, setFilterState] = useState('');
    const [eventsListState, setEventsListState] = useState([]);

    socket.on('message', data => {
        console.log(data);
    });

    useEffect(() => {
        socket.on('events', data => {
            setEventsListState(prevState => {
                prevState.push(JSON.parse(data));
                if (prevState.length > 25) {
                    prevState.shift();
                }
                return [...prevState];
            });
        });
    }, [socket]);

    const sunbcribeOnEvents = async () => {
        try {
            await axios.get('/events/start');
        } catch (error) {
            console.error(error);
        }
    };

    const unsunbcribeFromEvents = async () => {
        try {
            await axios.get('/events/stop');
        } catch (error) {
            console.error(error);
        }
    };

    const filterEvents = event => {
        event.persist();
        setFilterState(() => event.target.value);
    };

    return (
        <>
            <div className="events-form">
                <ButtonGroup className="events-buttons">
                    <Button id="live" onClick={sunbcribeOnEvents}>
                        Live
                    </Button>
                    <Button id="pause" onClick={unsunbcribeFromEvents}>
                        Pause
                    </Button>
                </ButtonGroup>
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
            </div>
            <div>
                <EventTable eventsList={eventsListState} filter={filterState} />
            </div>
        </>
    );
};
