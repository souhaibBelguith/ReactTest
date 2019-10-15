import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import Box from '@material-ui/core/Button';
import Album from './Album2';


function App() {
  /*const hotels =useSelector(state => state.allHotels);
  const islogged =useSelector(state => state.islogged);
  const reservedHotels =useSelector(state => state.allReservedHotels);
  const dispatch =useDispatch();*/

  return (
    <div className="App">
     <Album/>
     
     
    </div>
  );
}
/*<Box component="span" m={1}>
      <button onClick={()=> dispatch(reserveHotel(5))}>++++</button>
    </Box>*/
export default App;
