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
        padding: theme.spacing(1),
        margin: 'auto',
        maxWidth: 800,
    },
    image: {
        width: '100%',
        height: 100,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    h5:{
        style: 'font-size:10vw',
    }
}));
export default function ReservedBoxImg(props) {
    const classes = useStyles();
    
    return (
        <Grid direction="column" container spacing={1}>
            <Grid item>
                <ButtonBase className={classes.image}>
                    <img className={classes.image} alt="complex" src={props.hetelprop.imageUrl} />
                </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        
                        <h5> {props.hetelprop.name}</h5>
                    </Grid>
                </Grid>
                <Grid item>
                </Grid>
                <Typography variant="subtitle1">{props.hetelprop.price}€ * {props.hetelprop.nbrNuits}Nuits </Typography>
            </Grid>
        </Grid>
    );
}