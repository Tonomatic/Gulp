import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import restaurantReducer from './restaurant'
import reviewReducer from './reviews'


const rootReducer = combineReducers({
    session: sessionReducer,
    restaurant: restaurantReducer,
    review: reviewReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};


// window.store.dispatch(window.sessionActions.login({
//     credential: 'Demo-lition',
//     password: 'password'
//   }));


export default configureStore;
