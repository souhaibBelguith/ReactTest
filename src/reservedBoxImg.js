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
                        <Typography gutterBottom variant="h6">
                            {props.hetelprop.name}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1">{props.hetelprop.price } </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}