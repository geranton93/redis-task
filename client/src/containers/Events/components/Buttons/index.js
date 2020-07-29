import React from 'react';
import { Grid, ButtonGroup, Button, ThemeProvider } from '@material-ui/core';
import { useStyles } from '../../styles';

import theme from '../../../../theme';

export const Buttons = ({
    getButtonColor,
    sunbcribeOnEvents,
    unsunbcribeFromEvents
}) => {
    const classes = useStyles();

    return (
        <Grid item xs={2} className={classes.actionsBar}>
            <ThemeProvider theme={theme}>
                <ButtonGroup className={classes.buttonsGroup}>
                    <Button
                        id="live"
                        color={getButtonColor('live')}
                        onClick={sunbcribeOnEvents}
                    >
                        Live
                    </Button>
                    <Button
                        id="pause"
                        color={getButtonColor('pause')}
                        onClick={unsunbcribeFromEvents}
                    >
                        Pause
                    </Button>
                </ButtonGroup>
            </ThemeProvider>
        </Grid>
    );
};
