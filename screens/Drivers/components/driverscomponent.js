import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

const DriversComponent = (props) => {
    let items = [];
    let i = 0;
    props.drivers.forEach(item => {
        i+=1;
        items.push(
            <Text key={`text-driver-${i}`} style={styles.textDriver}>{ item.givenName + ' ' + item.familyName }</Text> 
        );
        items.push(
            <Text key={`text-nationality-${i}`} style={styles.textConstructor}>{ item.nationality }</Text> 
        );
    });
    return items;
};

const styles = StyleSheet.create({
    textDriver: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        width: '100%'
    }
});

export default DriversComponent;