import React, { Component } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

class PickLocation extends Component {
    render () {
        return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.placeholder}>Map</Text>
                </View>
                <View style={styles.button}>
                    <Button title="Get location" onPress={() => alert("Hello!")} style={styles.button}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    button: {
        margin: 5
    },
    placeholder: {
        backgroundColor: "grey",
        borderWidth: 1,
        borderColor: "#eee",
        width: "80%",
        height: 120
    }
});

export default PickLocation;