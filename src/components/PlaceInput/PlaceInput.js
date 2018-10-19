import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

import DefaultInput from '../UI/DefaultInput/DefaultInput';

const placeInput = props => (
    <DefaultInput
        placeholder="Travel Name"
        value={props.placeName}
        onChangeText={props.onChangeText} />
); 


export default placeInput;