//we create store and will combine later our all reducers
import {createStore, combineReducers} from 'redux';

import placesReducer from './reducers/places';

//I create root reducer where I map any key of my choice to reducer
const rootReducer = combineReducers({
    places: placesReducer,
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;