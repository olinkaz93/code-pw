import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import MainButton from '../../components/UI/MainButton/MainButton';
import backgroundImage from '../../assets/background.jpg';

class AuthScreen extends Component {
    loginHandler = () => {
            startMainTabs();
        }
    
    render () {
            
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <MainButton color="#f6f99f" onPress={() => alert("hello")}>Log in</MainButton>
                    <View style={styles.inputContainer}>
                        <DefaultInput placeholder="Your e-mail" style={styles.input}  />
                        <DefaultInput placeholder="Password" style={styles.input} />
                        <DefaultInput placeholder="Confirm password" style={styles.input}  />
                    </View>
                    <MainButton color="#ff6076" onPress={this.loginHandler}>Submit</MainButton>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: "15%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "#fff"
    },
    backgroundImage: {
        width: "100%",
        flex: 1
    }
});

export default AuthScreen;