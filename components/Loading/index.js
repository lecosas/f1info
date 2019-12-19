import React from 'react';
import { Spinner } from 'native-base';
import { View, StyleSheet } from 'react-native';

const Loading = ({ color, show }) => show ? 
    <View style={ styles.container }><Spinner color={ color } /></View> :
    null;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Loading;