import React from 'react';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';

export const EventTable = props => {
    return (
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
    );
};
