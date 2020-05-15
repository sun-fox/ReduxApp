import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const intialState = {};

const middleware = [thunk];

const store = createStore(rootReducer,intialState,applyMiddleware(...middleware));

export default store;