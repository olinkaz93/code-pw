import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PlaceDetail = props => {
    
   let modalContent = null;
    
    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} />
                <Text>{props.selectedPlace.name}</Text>
            </View>
        );
    }
    
    let text = "blabla";
    return (
        <Modal visible={props.selectedPlace !== null} animationType="slide" onRequestClose={() => {this.visible(false)}}>
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <TouchableOpacity>
                        <Icon size={30} name="md-trash" color="red" />
                    </TouchableOpacity>
                    <Button title="Delete" onPress={props.onItemDeleted}/>
                    <Button title="Close" onPress={props.onModalClosed}/>
                    <Text>{text}</Text>
                </View>   
            </View>
        </Modal>
            
        )
    };

const styles = StyleSheet.create({
    modalContainer: {
        margin: 15
    }
});

export default PlaceDetail;
