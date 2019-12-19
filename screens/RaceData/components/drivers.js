import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

const Drivers = (props) => {
    let items = [];
    let i = 0;
    props.drivers.forEach(item => {
        i+=1;
        items.push(
            <Text key={`text-driver-${i}`} style={styles.textDriver}>{ item.position + '. ' + item.Driver.givenName + ' ' + item.Driver.familyName }</Text> 
        );
        items.push(
            <Text key={`text-constructor-${i}`} style={styles.textConstructor}>{ item.Constructor.name }</Text> 
        );
    });
    return items;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textDriver: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        width: '100%'
    }
});

export default Drivers;