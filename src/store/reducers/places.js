import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

const initialState = {
    places: []
};

//es6 syntax state = initilState - sets it as the default state if there is no other declared
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                //I copy last state
                ...state,
                places: state.places.concat({key: Math.random().toString(), name: action.placeName, image:
                 {
                    uri: "https://pbs.twimg.com/profile_images/575890671350874112/lLhuNEZl_400x400.png",
                 }
                })   
            
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.placeKey;
                })
            };
                    
        default:
            return state;
    }
};

export default reducer;