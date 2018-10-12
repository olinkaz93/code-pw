import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = (props) => (
    //TouchableWithoutFeedback allows us to register touch events on the element it wraps
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Image source={props.placeImage} style={styles.placeImage} />
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 5,
        marginBottom: 5,
        backgroundColor: '#ddfff1',
        flexDirection: "row",
        alignItems: "center"
    },
    placeImage: {
        marginRight: 10,
        height: 30,
        width: 30
    }
    
});

export default ListItem;