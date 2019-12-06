import React from 'react';
import { Table, TableBody, TableRow, TableCell, Grid } from '@material-ui/core';

export const EventsTable = ({ filterList }) => {
    return (
        <Grid container item xs="8">
            <Table>
                <TableBody>
                    {filterList.map((event, index) => {
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
