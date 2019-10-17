import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch } from 'react-redux';
import { reserveHotel } from './actions';

export default function FormDialog(props) {
    const dispatch = useDispatch();

    

    return (
        <div>
            <Dialog open={props.open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Veuillez saisir le nombre de nuits à reserver :
                    </DialogContentText>
                    <TextField autoFocus margin="dense" id="number" label="Nombre De Nuit" type="number" fullWidth />
                    <Button onClick={() => dispatch(reserveHotel(props.hetelprop))} color="primary">
                        Valider
                    </Button>
                </DialogContent>
                <DialogActions>
                    <Button color="primary">
                        Cancel
                    </Button>   
                </DialogActions>
            </Dialog>
        </div>
    );
}
