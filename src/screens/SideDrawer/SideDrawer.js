import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

class SideDrawer extends Component {
    render () {
        return (
            <View style={styles.bigWindow}>
                <View style={styles.container}>
                    <Text>Side Drawer</Text>
                    <Text>Hakuna MATATA</Text>
                    <Text>Hakuna MATATA</Text>
                    <Text>Hakuna MATATA</Text>
                    <Text>Hakuna MATATA</Text>
                    <Text>Hakuna MATATA</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigWindow: {
        flex: 1,
        width: "100%"
    },
    container: {
        paddingTop: 22,
        backgroundColor: "blue",
        flex: 1,
        width: "80%"
    }
});

export default SideDrawer;