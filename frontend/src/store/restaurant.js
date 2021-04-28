import { csrfFetch } from './csrf';

const LOAD = "restaurants/load";
const load = (list) => ({
    type: LOAD,
    list,
});

export const getRestaurants = () => async (dispatch) => {
    const resta = await fetch('/api/restaurants');

    if (resta.ok) {
        const list = await resta.json();
        dispatch(load(list));
        // console.log(list)
        return resta;
    }
}

const initialState = { restaurant:{} };

const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            let allRes = {...state};
            action.list.forEach((review) => {
                allRes[review.id] = review;
            })
            return allRes
        default:
            return state;
    }
};

export default restaurantReducer;
