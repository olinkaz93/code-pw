import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, View, Text, StyleSheet } from 'react-native';

const mainButton = props => {
    const content = (
        <View style={[
        styles.button, {backgroundColor: props.color}, props.disabled ? styles.disabled : null]}>
            <Text style={props.disabled ? styles.disabledText : null}>{props.children}</Text>
        </View>
    );
    if (props.disabled) {
        return content;
    }
    
    return <TouchableNativeFeedback onPress={props.onPress}>{content}</TouchableNativeFeedback>
           
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin : 5,
        borderColor: 'white',
        borderWidth: 1
    },
    disabled: {
        backgroundColor: '#ff6076',
        borderColor: 'white'
    },
    disabledText: {
        color: 'black'
    }
});

export default mainButton;