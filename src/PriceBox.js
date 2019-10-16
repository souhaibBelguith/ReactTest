import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    h4:{
        style: 'font-size:10vw',
    },
    Grid:{
        style: 'align :center',
    },
    heroButtons: {
        marginTop: theme.spacing(0),
    },
}));

export default function PriceBox(props) {
    const classes = useStyles();
    return (
        <Grid direction="column" container spacing={1}>
            <Grid item xs={12} sm container>
                <Grid item>
                    <h4> Price = {props.hetelprop}€</h4>
                    
                </Grid>
                
            </Grid>
            {props.hetelprop? <div className={classes.heroButtons}>
                <Grid container spacing={0} justify="center">
                    <Grid item>
                        <Button variant="contained" color="primary">
                            Valider
                        </Button>
                    </Grid>
                </Grid>
            </div>: '' }
            
        </Grid>
    );
}