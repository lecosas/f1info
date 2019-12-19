import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

const Races = (props) => {
    const renderRaces = () => {
        let items = [];
        props.races.forEach(item => {
            items.push(
                <View key={ `view-race-${item.Circuit.circuitId}` } style={styles.buttonContainer}>
                    <Button
                        key={ `race-${item.Circuit.circuitId}` }
                        onPress={ () => props.handleRaces(item.round) }
                    >
                        <Text style={styles.textButton}>{ item.round + '. ' + item.Circuit.Location.country }</Text>
                    </Button>
                </View>
            );
         
        });
        return items;
    }

    return (
         <View style={styles.container}>{ renderRaces() }</View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '70%', 
        padding: 10,
    },
    textButton: {
        fontSize: 18,
        textAlign: 'center',
        width: '100%'
    }
});

export default Races;