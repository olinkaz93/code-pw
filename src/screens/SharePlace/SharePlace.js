import React, { Component } from 'react';
import { View, Screen, Text , Button, TextInput, SideDrawer, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';


class SharePlaceScreen extends Component {
    state = {
        placeName: ""
    };
    
    
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }
    
    onNavigatorEvent = event => {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left"
                });
            }
        }
    }
    
    placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        });
    }
    
    placeAddedHandler = () => {
        if (this.state.placeName.trim() !== "") {
            this.props.onAddPlace(this.state.placeName);
        }
        else {
            alert("NO DATA!");
        }
        
    }
    
    render () {
        
        return (
            <ScrollView>
                <View style={styles.container}>
                    <HeadingText>Find your place</HeadingText>
                    <PickImage />
                    <PickLocation />
                    <PlaceInput placeName={this.state.placeName} onChangeText={this.placeNameChangedHandler} />
                    <View style={styles.button}>
                        <Button title="Add to your diary!" onPress={this.placeAddedHandler}/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        width: "100%"
    },
    input: {
        width: "80%"
    },
    button: {
        margin: 5
    },
    imagePreview: {
        width: "100%",
        height: "100%"
    },
    placeholder: {
        backgroundColor: "grey",
        borderWidth: 1,
        borderColor: "#eee",
        width: "80%",
        height: 120
    }
});


const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);