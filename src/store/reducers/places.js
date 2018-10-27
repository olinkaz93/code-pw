import { SET_PLACES, REMOVE_PLACE } from '../actions/actionTypes';

const initialState = {
    places: []
};

//es6 syntax state = initilState - sets it as the default state if there is no other declared
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLACES:
            return {
                ...state,
                places: action.places
            };
        case REMOVE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.key;
                })
            };
                    
        default:
            return state;
    }
};

export default reducer;