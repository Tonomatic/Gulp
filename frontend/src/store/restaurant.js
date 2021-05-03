// import { csrfFetch } from './csrf';

const ADD_ONE = "restaurants/ADD_ONE"
const LOAD = "restaurants/load";
const ADD_ONEREV = "reviews/ADD_ONEREV"

const load = (list) => ({
    type: LOAD,
    list,
});
const load2 = restaurant => ({
    type: ADD_ONE,
    restaurant,
});

const addOneReview = review => ({
    type: ADD_ONEREV,
    review
})

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

export const createReview = data => async dispatch => {
    const res = await fetch(`/api/restaurants/${data.id}/reviews`, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if(res.ok) {
        const review = await res.json();
        dispatch(addOneReview(review));
        return review;
    }

}

// export const getReviews = (id) => async (dispatch) => {
//     const res = await fetch(`/api/restaurants/${id}/reviews`);
//     const list = await res.json();
//     dispatch(load(list));
// }

//Will be used to create a review for a specific restaurant
// export const createReview = (id, data) = async dispatch => {
//     const response = await fetch(`/api/restaurants/${id}/reviews`)
// }

const initialState = {
    list: [],
    restaurant: []
};


const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            let allRes = { ...state };
            action.list.forEach((restaurant) => {
                allRes[restaurant.id] = restaurant;
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
        };
        case ADD_ONEREV: {
            if (!state[action.review.id]) {

                const res = {
                    ...state,
                    [action.review.id]: action.review
                };
                const reviewList = res.list.map(id => res[id]);
                reviewList.push(action.review);
                return res;
            }
            return {
                ...state,
                [action.review.id]: {
                    ...state[action.review.id],
                    ...action.review
                }
            };
        }
        default:
            return state;
    }
};

export default restaurantReducer;
