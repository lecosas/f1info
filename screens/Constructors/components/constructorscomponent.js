import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

const ConstructorsComponent = (props) => {
    let items = [];
    let i = 0;
    console.log(props);
    props.constructors.forEach(item => {
        i+=1;
        items.push(
            <Text key={`text-constructor-${i}`} style={styles.textConstructor}>{ item.name }</Text> 
        );
        items.push(
            <Text key={`text-nationality-${i}`} >{ item.nationality }</Text> 
        );
    });
    return items;
};

const styles = StyleSheet.create({
    textConstructor: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        width: '100%'
    },
});

export default ConstructorsComponent;