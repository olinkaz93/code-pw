import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class PlaceInput extends Component {
    state = {
        placeName: ''
    };

//method to handle changes on the input
//modern syntax to create method in the class
//setState works as regular React app
//val is the value typed by user - the even that called this method
placeNameChangedHandler = val => {
    this.setState({
        placeName: val   
    });
};

//handler for button
placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
        return;
    }  

    this.props.onPlaceAdded(this.state.placeName);
}    

render() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.placeInput} placeholder="New place" value={this.state.placeName} onChangeText={this.placeNameChangedHandler} />
            <Button style={styles.placeButton} onPress={this.placeSubmitHandler} title="Add!" />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
    padding: 10,  
    width: "100%",  
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",  
},

placeInput: {
    width: "70%",
    //backgroundColor: "yellow",  
},

placeButton: {
    width: "30%",    
}, 

});

export default PlaceInput;