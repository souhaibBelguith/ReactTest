import allHotels from './hotelList';
import reservedHotel from './reservedList';
import NbrNuits from './NbrNuits'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    allHotels: allHotels,
    reservedHotel: reservedHotel,
    NbrNuits:NbrNuits,
});

export default allReducers;