let reservedList = [];
let previousList = [];


// concat the previos list of reserved hotel and set it to state
const reservedHotel = (state = reservedList, action) => {
    switch (action.type) {
        case 'getHotelData':
            previousList.push(action.data);
            console.log(reservedList);
            return state = reservedList.concat(previousList);
        default:
            return state;
    }
}

export default reservedHotel;