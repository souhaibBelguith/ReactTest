import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from './actions';
import {decrement} from './actions';
import Box from '@material-ui/core/Button';
import Album from './Album';


function App() {
  const hotels =useSelector(state => state.allHotels);
  const islogged =useSelector(state => state.islogged);
  const dispatch =useDispatch();
  ;
  return (
    <div className="App">
     <Album/>
     <div className="userList">
      {hotels.map((hotel) => (
        <h1>{hotel.name}</h1>
      ))}
    </div>
     <h1>hello</h1>
     {islogged ? <h3>not now</h3>: ''}
     <Box component="span" m={1}>
      <button onClick={()=> dispatch(increment(5))}>++++</button>
      <button onClick={()=> dispatch(decrement())}>----</button>
    </Box>
    </div>
  );
}

export default App;
