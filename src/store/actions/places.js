import { ADD_PLACE, DELETE_PLACE } from './actionTypes'

//I store here my places related actions
export const addPlace = (placeName, location, image) => {
  return dispatch => {
      const placeData = {
          name: placeName,
          location: location
      };
      fetch("https://traveldiaryokno-220216.firebaseio.com/places.json", {
          method: "POST",
          body: JSON.stringify(placeData)
      })
      .catch(err => console.log(err))
      .then(res => res.json())
      .then(parsedRes => {
          console.log(parsedRes);
      });
  };  
};

//no argument needed
export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey: key
    };
};

