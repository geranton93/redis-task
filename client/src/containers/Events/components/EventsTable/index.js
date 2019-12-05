import React from 'react';
import { Table, TableBody, TableRow, TableCell, Grid } from '@material-ui/core';

export const EventsTable = props => {
    return (
        <Grid container item xs="8">
            <Table>
                <TableBody>
                    {props.eventsList
                        .filter(event => event.type.includes(props.filter))
                        .map((event, index) => {
                            return (
                                <TableRow key={event.messageId + index}>
                                    <TableCell>{event.type}</TableCell>
                                    <TableCell>{event.userId}</TableCell>
                                    <TableCell>
                                        {new Date(event.sentAt).toLocaleString()}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </Grid>
    );
};
