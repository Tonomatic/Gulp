// import { csrfFetch } from './csrf';

const ADD_ONE = "restaurants/ADD_ONE"
const LOAD = "restaurants/load";
const load = (list) => ({
    type: LOAD,
    list,
});
const load2 = restaurant => ({
    type: ADD_ONE,
    restaurant,
});

export const getRestaurants = () => async (dispatch) => {
    const resta = await fetch('/api/restaurants');

    if (resta.ok) {
        const list = await resta.json();
        dispatch(load(list));
        // console.log(list)
        // return resta;
    }
}


export const getOneRestaurant = (id) => async (dispatch) => {
    const res = await fetch(`/api/restaurants/${id}`);
    if (res.ok) {

        const restaurant = await res.json();
        dispatch(load2(restaurant))
    }
}


const initialState = {
    list: [],
    restaurant: []
  };


const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            let allRes = { ...state };
            action.list.forEach((review) => {
                allRes[review.id] = review;
            })
            return allRes;
        case ADD_ONE: {
            if (!state[action.restaurant.id]) {

                const res = {
                    ...state,
                    [action.restaurant.id]: action.restaurant
                };
                const restaurantList = res.list.map(id => res[id]);
                restaurantList.push(action.restaurant);
                return res;
            }
            return {
                ...state,
                [action.restaurant.id]: {
                    ...state[action.restaurant.id],
                    ...action.restaurant
                }
            };
        }
        default:
            return state;
    }
};

export default restaurantReducer;
