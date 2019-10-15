export const reserveHotel=(hotel)=>{
    return {
        type: 'getHotelData',
        data: hotel
    };
};

export const listHotel=()=>{
    return {

        type: 'getHotels'
    };
};