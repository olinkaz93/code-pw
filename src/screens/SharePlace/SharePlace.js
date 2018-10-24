import React, { Component } from 'react';
import { View, Screen, Text , Button, TextInput, SideDrawer, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';
import validate from '../../utility/validation';

class SharePlaceScreen extends Component {
    state = {
        controls: {
            placeName: {
                value: "",
                valid: false,
                touched: false,
                validationRules: {
                    notEmpty: true
                }
            },
            location: {
                value: null,
                valid: false
            }
        }
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
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    placeName: {
                        ...prevState.controls.placeName,
                        value: val,
                        valid: validate(val, prevState.controls.placeName.validationRules),
                        touched: true
                    }
                }
            };
        });
    };

    locationPickedHandler = location => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    location: {
                        value: location,
                        valid: true
                    }
                }
            }
        });
    }
    
    placeAddedHandler = () => {
        this.props.onAddPlace(
            this.state.controls.placeName.value,
            this.state.controls.location.value);
    }
    
    render () {
        
        return (
            <ScrollView>
                <View style={styles.container}>
                    <HeadingText>Find your place</HeadingText>
                    <PickImage />
                    <PickLocation onLocationPick={this.locationPickedHandler}/>
                    <PlaceInput placeData={this.state.controls.placeName} onChangeText={this.placeNameChangedHandler} />
                    <View style={styles.button}>
                        <Button title="Add to your diary!" onPress={this.placeAddedHandler}
                        disabled={!this.state.controls.placeName.valid|| !this.state.controls.location.valid }/>
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
        onAddPlace: (placeName, location) => dispatch(addPlace(placeName, location))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);