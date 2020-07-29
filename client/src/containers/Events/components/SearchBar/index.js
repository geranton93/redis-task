import React from 'react';
import { Grid, TextField, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import { useStyles } from '../../styles';

export const SearchBar = ({ filterEvents }) => {
    const classes = useStyles();

    return (
        <Grid item xs={6} className={classes.actionsBar}>
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
    );
};
