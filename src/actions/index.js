export const increment=nbr=>{
    return {
        type: 'INCREMENT',
        data: nbr
    };
};

export const decrement=()=>{
    return {
        type: 'DECREMENT'
    }
};