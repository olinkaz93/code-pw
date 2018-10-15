import React, { Component } from 'react';
import { View, Image, Text, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/index';


class PlaceDetail extends Component {
    placeDeletedHandler = () => {
        this.props.onDeletePlace(this.props.selectedPlace.key);
        this.props.navigator.pop();
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>{this.props.selectedPlace.name}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={this.placeDeletedHandler}>
                        <Icon size={30} name="md-trash" color="red" />
                    </TouchableOpacity>
                </View>   
            </View>
        );
    };
}


const styles = StyleSheet.create({
    container: {
        margin: 15
    }
});

const mapDispatchToProps = dispatch => {
    return {
      onDeletePlace: (key) => dispatch(deletePlace(key))  
    };
};

export default connect(null, mapDispatchToProps)(PlaceDetail);
