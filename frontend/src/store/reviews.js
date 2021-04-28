import { csrfFetch } from './csrf';

const LOAD = "bookmark/load";
const DELETE = "bookmark/delete";
const ADD = "bookmark/add"

const load = (list) => ({
    type: LOAD,
    list,
});

const addReview = (review) => ({
    type: ADD,
    review,
})

const deleteReview = (reviewId) => ({
    type: DELETE,
    reviewId
})

export const getReviews = (userId) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews`);
    const result = await res.json();
    dispatch(load(result));
    return result;
}

const initialState = { reviews:[] };

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            const allRes = {};
            action.list.forEach((restaurant) => {
                allRes[restaurant.id] = restaurant;
            })
            return {
                ...allRes,
                ...state
            }
        default:
            return state;
    }
};

export default reviewReducer;
