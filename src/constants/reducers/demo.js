export default (state = [], payload) => {
    switch (payload.type) {
        case 'carousel/changeWidth':
            return {
                ...state,
                'carouselWidth':payload.width
            };
        default:
            return state;
    }
};