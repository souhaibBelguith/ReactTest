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

export const nbrNuits=(nbr)=>{
    return {

        type: 'getNbrNuits',
        data : nbr
    };
};
