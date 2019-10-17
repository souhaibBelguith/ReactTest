import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
    h4: {
        style: 'font-size:10vw',
    },
    Grid: {
        style: 'align :center',
    },
    heroButtons: {
        marginTop: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(1),
        margin: 'auto',
        maxWidth: 300,
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
    h5: {
        style: 'font-size:10vw',
    }
}));

export default function PriceBox(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const handleClickOpen = scrollType => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Grid direction="column" container spacing={1}>
            <Grid item xs={12} sm container>
                <Grid item>
                    <h4> Price = {props.hetelprop}€</h4>
                </Grid>
            </Grid>
            {props.hetelprop ? <div className={classes.heroButtons}>
                <Grid container spacing={0} justify="center">
                    <Grid item>
                        <Button onClick={handleClickOpen('paper')} variant="contained" color="primary">
                            Valider
                        </Button>
                    </Grid>
                </Grid>
            </div> : ''}

            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
            >
                <DialogTitle id="scroll-dialog-title">Validation</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    {props.hel.map((hotel, index) => (
                        <Grid item key={index} xs={12} sm={6} md={6}>
                            <Paper >
                                <Grid direction="column" container spacing={1}>
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.image} alt="complex" src={hotel.imageUrl} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <h5> {hotel.name}</h5>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                        </Grid>
                                        <Typography variant="subtitle1">{hotel.price}€ * {hotel.nbrNuits}Nuits </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    ))}
                    <Grid item>
                        <h4> Price = {props.hetelprop}€</h4>
                    </Grid>
                    <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Annuler
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Valider
          </Button>
                </DialogActions>
            </Dialog>

        </Grid>
    );
}