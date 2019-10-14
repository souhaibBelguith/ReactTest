import React from 'react';
import { useSelector} from 'react-redux';
import { connect } from 'react-redux';
import reservedHotel from './reducers/reservedList';


function ReservedComponent() {
    let reservedHotel = useSelector(state => state.reservedHotel);

    return (
        <div>
            <h1>Teeeeest</h1>
            <div className="userList">
                {reservedHotel.map((hotel) => (
                    <h1>{hotel.name}</h1>
                ))}
            </div>
        </div>
    );
}
export default connect(reservedHotel)(ReservedComponent);
