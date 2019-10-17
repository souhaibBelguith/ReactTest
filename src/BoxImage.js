import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import { reserveHotel } from './actions';
import { nbrNuits } from './actions';
import { useDispatch } from 'react-redux';


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    //let Data = [];

    return (
        <div >
            <Grid container spacing={2} onClick={handleClickOpen}>
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
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Veuillez saisir le nombre de nuits à reserver :
                        </DialogContentText>
                    <TextField autoFocus margin="dense" id="number" label="Nombre De Nuit" type="number" fullWidth />
                    <Button onClick={() => {
                        handleClose(); dispatch(reserveHotel(props.hetelprop), dispatch(nbrNuits({
                            imageUrl: props.hetelprop.imageUrl,
                            name: props.hetelprop.name,
                            price: parseInt(props.hetelprop.price),
                            nbrNuits: parseInt(document.getElementById("number").value)
                        })))
                    }}
                        color="primary">
                        Valider
                        </Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Annuler
                        </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}