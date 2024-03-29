import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import BoxImg from './BoxImage';
import ReservedBoxImg from './reservedBoxImg';


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
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    tab: {
        'border-collapse': 'collapse',
    },
}));

export default function Album() {
    const hotels = useSelector(state => state.allHotels);
    const reservedHotel = useSelector(state => state.reservedHotel);
    //compare the list for hotels and the list of reserved hotel 
    let dispoHotel = hotels.filter(x => !reservedHotel.includes(x));
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        LOGO
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Hotel List
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Main call to action
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <table className={classes.tab} >
                    <tr>
                        <th width="50%" id="all">Hotel List</th>
                        <th width="50%" id="reseved">Reserved hotel </th>
                    </tr>
                    <tr>
                        <td width="50%" >
                            <Container className={classes.cardGrid} maxWidth="md" >
                                {/* End hero unit */}
                                <Grid direction="column" container spacing={2}>
                                    {dispoHotel.map(hotel => (
                                        <Grid item key={hotel} xs={12} sm={6} md={6}>
                                            <Paper className={classes.card}>
                                                <BoxImg hetelprop={hotel} ></BoxImg>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Container>
                        </td>
                        <td width="50%" >
                            <Container className={classes.cardGrid} maxWidth="md">
                                <Grid direction="column" container spacing={2}>
                                    {reservedHotel.map(hotel => (
                                        <Grid item key={hotel} xs={12} sm={6} md={6}>
                                            <Paper className={classes.card}>
                                                <ReservedBoxImg hetelprop={hotel} ></ReservedBoxImg>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Container>
                        </td>
                    </tr>
                </table>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}

/*<Container className={classes.cardGrid} maxWidth="md">
                            <Grid direction="column" container spacing={2}>
                                {reservedHotel.map(hotel => (
                                    <Grid item key={hotel} xs={12} sm={6} md={6}>
                                        <Paper className={classes.card}>
                                            <BoxImg hetelprop={hotel} ></BoxImg>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container> */
