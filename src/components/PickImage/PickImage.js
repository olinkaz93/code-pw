import React, { Component } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import imagePlaceholder from '../../assets/picture-logo.jpg';



class PickImage extends Component {
    render () {
        return(
            <View style={styles.container}>
                <View style={styles.placeholder}>
                    <Image source={imagePlaceholder} style={styles.imagePreview}/>
                </View>
                <View style={styles.button}>
                    <Button title="Upload the picture" onPress={() => alert("Hello!")}/>
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

export default PickImage;