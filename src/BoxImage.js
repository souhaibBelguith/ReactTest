
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

export default function BoxImg(props) {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item>
                <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={props.hetelprop.imageUrl} />
                </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <h2 gutterBottom variant="subtitle1">
                        {props.hetelprop.name}
                        </h2>
                        <Typography variant="body2" color="textSecondary">
                        {props.hetelprop.description}
                         </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                            Remove
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1">{props.hetelprop.price} </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}