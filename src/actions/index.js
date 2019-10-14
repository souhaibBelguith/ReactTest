export const reserveHotel=(nbr)=>{
    return {
        type: 'getHotelData',
        data: nbr
    };
};

export const listHotel=()=>{
    return {

        type: 'getHotels'
    };
};