import allHotels from './hotelList';
import reservedHotel from './reservedList';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    allHotels: allHotels,
    reservedHotel: reservedHotel,
});

export default allReducers;