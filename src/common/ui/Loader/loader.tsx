import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80%',
            height: '100%',
        },
    }),
);

export default function Loader(): JSX.Element {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress size={50} />
        </div>
    );
}
