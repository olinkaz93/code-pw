import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';

class AuthScreen extends Component {
    loginHandler = () => {
            startMainTabs();
        }
    
    render () {
            
        return (
            <View style={styles.container}>
                <HeadingText>Hello, Please Log In !</HeadingText>
                <Button title="Switch to Login" onPress={this.loginHandler} />
                <View style={styles.inputContainer}>
                    <DefaultInput placeholder="Your e-mail" style={styles.input}  />
                    <DefaultInput placeholder="Password" style={styles.input} />
                    <DefaultInput placeholder="Confirm password" style={styles.input}  />
                </View>
                <Button title="Submit" onPress={this.loginHandler} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "pink"
    }
});

export default AuthScreen;