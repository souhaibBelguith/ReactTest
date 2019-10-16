import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import { reserveHotel } from './actions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 600,
        maxHeight: 200
    },
    image: {
        width: 128,
        height: '100%',
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    
}));

export default function BoxImg(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <div  onClick={() => dispatch(reserveHotel(props.hetelprop))}>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase className={classes.image}>
                        <img className={classes.image} alt="complex" src={props.hetelprop.imageUrl} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="h6">
                                {props.hetelprop.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {props.hetelprop.description}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">{props.hetelprop.price} </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}