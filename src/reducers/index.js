import allHotels from './hotelList';
import LoggedReducer from './islogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    allHotels : allHotels,
    isLogged : LoggedReducer    
});

export default allReducers;