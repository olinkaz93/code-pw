import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, Alert } from 'react-native';

const PlaceDetail = props => {
    
   let modalContent = null;
    
    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.placeImage} />
                <Text>{props.selectedPlace.placeName}</Text>
            </View>
        );
    }
    
    let text = "blabla";
    return (
        /*<Modal visible={props.selectedPlace !== null} onRequestClose={() => {this.visible(false)}}>
          /*  <View style={styles.modalContainer}>
                {modalContent}*/
                <View>
                    <Button title="Delete" onPress={() => {Alert.alert('You tapped the button!');}}/>
                    <Button title="Close" onPress={() => { Alert.alert('You tapped the button!');}}/>
                    <Text>{text}</Text>
                    <Text>{modalContent}</Text>
                </View>   
        
          /*  </View>*/
        
       /* </Modal>*/
        
                
        )
    };

const styles = StyleSheet.create({
    modalContainer: {
        margin: 15
    }
});

export default PlaceDetail;