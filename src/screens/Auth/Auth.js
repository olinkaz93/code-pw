import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Dimensions, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import MainButton from '../../components/UI/MainButton/MainButton';
import backgroundImage from '../../assets/background.jpg';
import validate from '../../utility/validation';
import { tryAuth, authAutoSignIn } from '../../store/actions/index';

class AuthScreen extends Component {
    state = {
        viewMode: Dimensions.get('window').height > 500 ? "portrait" : "landscape",
        authMode: "login",
        controls: {
            email: {
                value: "",
                valid: false,
                validationRules: {
                    isEmail: true
                },
                touched: false
            },
            password: {
                value: "",
                valid: false,
                validationRules: {
                    minLength: 6
                },
                touched: false
            },
            confirmPassword: {
                value: "",
                valid: false,
                validationRules: {
                    equalTo: 'password'
                },
                touched: false
            }
        }
    };

    constructor(props) {
        super(props);
        
    }
    
    componentDidMount() {
        Dimensions.addEventListener("change", this.updateStyles)
    }
    
    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.updateStyles)
    }

    componentDidMount() {
        this.props.onAutoSignIn();
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
           return {
            authMode: prevState.authMode === "login" ? "signup" : "login"   
           };
        });
    };

    updateStyles = dims => {
        this.setState({
            viewMode: dims.window.height > 500 ? "portrait" : "landscape"
        })
    }

    authHandler = () => {
        const authData = {
            email: this.state.controls.email.value,
            password: this.state.controls.password.value
        };
        this.props.onTryAuth(authData, this.state.authMode);
        
        }
    
    updateInputState = (key, value) => {
        let connectedValue = {};
        if (this.state.controls[key].validationRules.equalTo) {
            const equalControl = this.state.controls[key].validationRules.equalTo;
            const equalValue = this.state.controls[equalControl].value;
            connectedValue = {
              ...connectedValue,
                equalTo: equalValue
            };
        }
        if (key === 'password') {
            connectedValue = {
              ...connectedValue,
                equalTo: value
            };
        }
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    confirmPassword: {
                        ...prevState.controls.confirmPassword,
                        valid: key === 'password' ? validate(prevState.controls.confirmPassword.value, prevState.controls.confirmPassword.validationRules, connectedValue) : prevState.controls.confirmPassword.valid
                    },
                    [key] : {
                        ...prevState.controls[key],
                        value: value,
                        valid: validate(value, prevState.controls[key].validationRules, connectedValue),
                        touched: true
                    }
                }
            };
        });
    }
    
    render () {
        
        let confirmPasswordControl = null;
        let submitButton = (
            <MainButton color="#f6f99f" onPress={this.authHandler}
                    disabled={
                        !this.state.controls.confirmPassword.valid && this.state.authMode === "signup" ||
                        !this.state.controls.email.valid ||
                        !this.state.controls.password.valid}
                    >Submit</MainButton>
        );
        
        if (this.state.authMode === 'signup') {
            confirmPasswordControl = (
            <View style={ this.state.viewMode === "portrait"
            ? styles.portraitPasswordItem
            : styles.landscapePasswordItem
            }>
                <DefaultInput
                    placeholder="Confirm password"
                    style={styles.input}
                    value={this.state.controls.confirmPassword.value}
                    onChangeText={(val) => this.updateInputState('confirmPassword', val)}
                    valid={this.state.controls.confirmPassword.valid}
                    touched={this.state.controls.confirmPassword.touched}
                    secureTextEntry />
            </View>
            );
        }
        if (this.props.isLoading) {
            submitButton = <ActivityIndicator />
        }   
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <KeyboardAvoidingView style={[styles.container, this.state.viewMode === "portrait" ? styles.portraitContainer : styles.landscapeContainer]} behavior="padding">
                    <MainButton color="#ff6076" onPress={this.switchAuthModeHandler}>{this.state.authMode === 'login' ? "Sign up!" : "Login"}</MainButton>
                    <View style={styles.inputContainer}>
                        <DefaultInput placeholder="Your e-mail" style={styles.input}
                        value={this.state.controls.email.value}
                        onChangeText={(val) => this.updateInputState('email', val)}
                        valid={this.state.controls.email.valid}
                        touched={this.state.controls.email.touched}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address" />
                        <View style={
                            this.state.viewMode === "portrait" || this.state.authMode === "login"
                            ? styles.portraitPasswordContainer
                            : styles.landscapePasswordContainer
                        }>
                            <View style={
                                this.state.viewMode === "portrait" || this.state.authMode === "login"
                                ? styles.portraitPasswordItem
                                : styles.landscapePasswordItem
                            }>
                                <DefaultInput placeholder="Password"
                                style={styles.input}
                                value={this.state.controls.password.value}
                                onChangeText={(val) => this.updateInputState('password', val)}
                                valid={this.state.controls.password.valid}
                                touched={this.state.controls.password.touched}
                                secureTextEntry/>
                            </View>
                            {confirmPasswordControl}
                        </View>
                    </View>
                    {submitButton}
                </KeyboardAvoidingView>
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

const mapStateToProps = state => {
    return {
        isLoading: state.ui.isLoading
    };
};

const mapDispatchToProps = dispatch => {
  return {
      onTryAuth: (authData, authMode) => dispatch(tryAuth(authData, authMode)),
      onAutoSignIn: () => dispatch(authAutoSignIn())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);