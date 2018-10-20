import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import MainButton from '../../components/UI/MainButton/MainButton';
import backgroundImage from '../../assets/background.jpg';

class AuthScreen extends Component {
    state = {
        viewMode: Dimensions.get('window').height > 500 ? "portrait" : "landscape"
    }

    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", (dims) => {
            this.setState({
               viewMode: Dimensions.get('window').height > 500 ? "portrait" : "landscape" 
            });
        });
    }
    
    
    loginHandler = () => {
            startMainTabs();
        }
    
    render () {
            
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={[styles.container, this.state.viewMode === "portrait" ? styles.portraitContainer : styles.landscapeContainer]}>
                    <MainButton color="#f6f99f" onPress={() => alert("hello")}>Log in</MainButton>
                    <View style={styles.inputContainer}>
                        <DefaultInput placeholder="Your e-mail" style={styles.input}  />
                        <View style={
                            this.state.viewMode === "portrait"
                            ? styles.portraitPasswordContainer
                            : styles.landscapePasswordContainer
                        }>
                            <View style={
                                this.state.viewMode === "portrait"
                                ? styles.portraitPasswordItem
                                : styles.landscapePasswordItem
                            }>
                                <DefaultInput placeholder="Password" style={styles.input} />
                            </View>
                            <View style={
                                this.state.viewMode === "portrait"
                                ? styles.portraitPasswordItem
                                : styles.landscapePasswordItem
                            }>
                                <DefaultInput placeholder="Confirm password" style={styles.input}  />
                            </View>                        
                        </View>
                    </View>
                    <MainButton color="#ff6076" onPress={this.loginHandler}>Submit</MainButton>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    portraitContainer: {
        paddingTop: "15%"
    },
    landscapeContainer: {
        paddingTop: "2%"
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
    },
    landscapePasswordContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    portraitPasswordContainer: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    landscapePasswordItem: {
        width: "49%"
    },
    portraitPasswordItem: {
        width: "100%"
    }
});

export default AuthScreen;