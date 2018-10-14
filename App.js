import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceImage from './src/assets/logo-small.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';

type Props = {};
class App extends Component<Props> {

    //we use our connect from Redux
    
    //handler for button
    placeAddedHandler = (placeName) => {
        this.props.onAddPlace(placeName);
    };
    
    placeDeletedHandler = () => {
        this.props.onDeletePlace();
    }
    
    modalClosedHandler = () => {
        this.props.onDeselectPlace();
    };
    
    placeSelectedHandler = key => {
        this.props.onSelectPlace(key); 
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceDetail selectedPlace={this.props.selectedPlace} onItemDeleted={this.placeDeletedHandler} onModalClosed={this.modalClosedHandler} />
                <PlaceInput onPlaceAdded={this.placeAddedHandler} />
                <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b5fff3',
        color: 'black',
        justifyContent: "flex-start",
    }
});

//argumnet for connect, wths will be a function that receives the state
const mapStateToProps = state => {
    return {
        places: state.places.places,
        selectedPlace: state.places.selectedPlace
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (name) => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: (key) => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace())
    };
};
//we define a connection between App and Redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);
