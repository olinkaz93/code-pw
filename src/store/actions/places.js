import { ADD_PLACE, DELETE_PLACE } from './actionTypes'

//I store here my places related actions
export const addPlace = (placeName, location) => {
  return {
      //thi action should have a payload, as this will be consued later by the reducer so he neeeds to know this value and propery to hae access in redcucer
      type: ADD_PLACE,
      placeName: placeName,
      location: location
  };
};

//no argument needed
export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey: key
    };
};

