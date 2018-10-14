import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from './actionTypes'

//I store here my places related actions
export const addPlace = (placeName) => {
  return {
      //thi action should have a payload, as this will be consued later by the reducer so he neeeds to know this value and propery to hae access in redcucer
      type: ADD_PLACE,
      placeName: placeName
  };
};

//no argument needed
export const deletePlace = () => {
    return {
        type: DELETE_PLACE  
    };
};

export const selectPlace = (key) => {
    return {
        type: SELECT_PLACE,
        placeKey: key
    };
};

//no argument needed
export const deselectPlace = () => {
    return {
        type: DESELECT_PLACE  
    };
};