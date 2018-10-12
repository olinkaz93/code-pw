import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceImage from './src/assets/logo-small.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

type Props = {};
export default class App extends Component<Props> {

    //defining a state
    state = {
        places: [],
        selectedPlace: null
    };

    //handler for button
    placeAddedHandler = (placeName) => {
        this.setState(prevState => {
            return {
                places: prevState.places.concat({key: Math.random().toString(), name: placeName, image: PlaceImage})   
            }; 
        }); 
    }
    
    placeSelectedHandler = key => {
        this.setState(prevState => {
            return {
                selectedPlace: prevState.places.find(place => {
                    return place.key === key;
                })
            };
        })
        //this.setState(prevState => {
        //    return {
        //        places: //prevState.places.filter(place => {
        //            return place.key !== key;
        //            
        //        })
        //    };
        //})
    }

    render() {
        return (
            <View style={styles.container}>
                <PlaceDetail selectedPlace={this.state.selectedPlace} />
                <PlaceInput onPlaceAdded={this.placeAddedHandler} />
                <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler} />
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
