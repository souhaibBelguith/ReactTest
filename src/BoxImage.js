
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 600,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function BoxImg(dataFromParent) {
    const classes = useStyles();
    const greeting = dataFromParent;
    return (
        <Grid container spacing={2}>
            <Grid item>
                <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src="https://source.unsplash.com/random" />
                </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <h1 gutterBottom variant="subtitle1">
                        {dataFromParent.name}
                        </h1>
                        <Typography variant="body2" color="textSecondary">
                            ID: 1030114
                         </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                            Remove
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1">$19.00 </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}