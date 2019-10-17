import React from 'react';
import AppBar from '@material-ui/core/AppBar';

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
import PriceBox from './PriceBox';



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
    cardHeader: {
        backgroundColor: theme.palette.grey[200],
        height: '100%',
    },
}));



export default function Album() {
    const hotels = useSelector(state => state.allHotels);
    const reservedHotel = useSelector(state => state.reservedHotel);
    const priceList = useSelector(state => state.NbrNuits);
    //compare the list for hotels and the list of reserved hotel 
    let dispoHotel = hotels.filter(x => !reservedHotel.includes(x));
    const classes = useStyles();
    let Allprice = 0;
    
    priceList.map((hotelPrice, index) => (
        Allprice = Allprice + (hotelPrice.price * hotelPrice.nbrNuits)
    ))

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
                <div className="grid-container">
                    <div className="HotelListTitle"></div>
                    <div className="ReservedTitle">
                        <h4>PANIER</h4>
                    </div>
                    <div className="HotelListBox">
                        <Container className={classes.cardGrid} maxWidth="md" >
                            <Grid direction="column" container spacing={2}>
                                {dispoHotel.map((hotel, index) => (
                                    <Grid item key={index} xs={12} sm={6} md={6}>
                                        <Paper className={classes.card}>
                                            <div >
                                                <BoxImg hetelprop={hotel} ></BoxImg>
                                            </div>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </div>
                    <div className="ReservedListBox">
                        <div className={classes.cardHeader}>
                            <Container className={classes.cardGrid} maxWidth="md">
                                <Grid direction="column" container spacing={2}>
                                    {priceList.map((hotel, index) => (
                                        <Grid item key={index} xs={12} sm={6} md={6}>
                                            <Paper className={classes.card}>
                                                <ReservedBoxImg  hetelprop={hotel} ></ReservedBoxImg>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                                <Grid direction="column" container spacing={2}>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <Paper className={classes.card}>
                                            <PriceBox hel={priceList}  hetelprop={Allprice} ></PriceBox>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                    </div>
                </div>

            </main>
        </React.Fragment>
    );
}