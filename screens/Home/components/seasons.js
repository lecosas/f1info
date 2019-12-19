import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

const Seasons = (props) => {
    const renderSeasons = () => {
        let items = [];
        for (let i = 0; i < 20; i++) {
            const year = `20${ i > 9 ? i : `0${i}`}`;     
            items.push(
                <View key={ `view-season-${year}` } style={styles.buttonContainer}>
                    <Button
                        key={ `season-${year}` }
                        onPress={ () => props.handleSeason(year) }
                    >
                        <Text style={styles.textButton}>{ year }</Text>
                    </Button>      
                </View>   
            );
        }
        return items;
    }

    return (
        <View style={styles.container}>{ renderSeasons() }</View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '40%', 
        padding: 10,
    },
    textButton: {
        fontSize: 20,
        textAlign: 'center',
        width: '100%'
    }
});

export default Seasons;