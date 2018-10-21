import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = props => (
    <TextInput
        {...props}
        style={[styles.input, props.style, !props.valid && props.touched ? styles.invalid : null, props.valid ? styles.valid : null]}/>
);

const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#eee",
        padding: 5,
        margin: 5
    },
    invalid: {
        backgroundColor: '#f9c0c0',
        borderColor: 'red'
    },
    valid: {
        backgroundColor: '#f6f99f',
        borderColor: 'green'
    }
});

export default defaultInput;