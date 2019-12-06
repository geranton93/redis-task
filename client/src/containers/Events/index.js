import React, { useState, useEffect } from 'react';

import EventsService from '../../services/events.service';

import { SearchBar } from './components/SearchBar';
import { EventsTable } from './components/EventsTable';
import { Buttons } from './components/Buttons';

export const EventsContainer = props => {
    const { socket } = props;

    const [filterState, setFilterState] = useState('');
    const [eventsListState, setEventsListState] = useState([]);
    const [eventsStatus, setEventsStatus] = useState('pause');

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
            setEventsStatus('live');
        } catch (error) {
            console.error(error);
        }
    };

    const unsunbcribeFromEvents = async () => {
        try {
            await EventsService.stopEvents();
            setEventsStatus('pause');
        } catch (error) {
            console.error(error);
        }
    };

    const filterEvents = event => {
        event.persist();
        setFilterState(() => event.target.value);
    };

    const getButtonColor = id => {
        return id === eventsStatus ? 'primary' : 'default';
    };

    const filterList = eventsListState.filter(event =>
        event.type.includes(filterState)
    );

    return (
        <>
            <Buttons
                getButtonColor={getButtonColor}
                sunbcribeOnEvents={sunbcribeOnEvents}
                unsunbcribeFromEvents={unsunbcribeFromEvents}
            />
            <SearchBar filterEvents={filterEvents} />
            <EventsTable filterList={filterList} />
        </>
    );
};
