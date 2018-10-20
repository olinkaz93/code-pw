import React, { Component } from 'react';
import { View, Image, Text, Button, StyleSheet, Alert, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/index';


class PlaceDetail extends Component {
    state = {
        viewMode: "portrait"
    }

    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", this.updateStyles);
    }
    
    updateStyles = dims => {
        this.setState({
            viewMode: dims.window.height > 500 ? "portrait" : "landscape"
        })
    }
    
    placeDeletedHandler = () => {
        this.props.onDeletePlace(this.props.selectedPlace.key);
        this.props.navigator.pop();
    }
    
    render() {
        return (
            <View style={[styles.container, this.state.viewMode === "portrait" ? styles.portraitContainer : styles.landscapeContainer]}>
                <View style={styles.containerItem}>
                    <Image source={this.props.selectedPlace.image} style={styles.placeImage}/>
                </View>
                <View style={styles.containerItem}>
                    <View>
                        <Text>{this.props.selectedPlace.name}</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={this.placeDeletedHandler}>
                            <Icon size={30} name="md-trash" color="#ff6076" />
                        </TouchableOpacity>
                    </View>  
                </View>
            </View>
        );
    };
}


const styles = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1
    },
    portraitContainer: {
        flexDirection: "column"
    },
    landscapeContainer: {
        flexDirection: "row"
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    containerItem: {
        flex: 1
    }
    
});

const mapDispatchToProps = dispatch => {
    return {
      onDeletePlace: (key) => dispatch(deletePlace(key))  
    };
};

export default connect(null, mapDispatchToProps)(PlaceDetail);
