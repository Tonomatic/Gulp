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
    }
}

const initialState = { user: null };

const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            const allRes = {};
            action.list.forEach((restaurant) => {
                allRes[restaurant.id] = restaurant;
            })
            return allRes;
        default:
            return state;
    }
};

export default restaurantReducer;
