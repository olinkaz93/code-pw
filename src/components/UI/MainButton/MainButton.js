import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const mainButton = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <Text>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin : 5,
        borderColor: "white",
        borderWidth: 1
    }
});

export default mainButton;