import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import LogoImg from '../../assets/logo.png';

const Logo = () => {
    return (
        <View style={styles.imgContainer}>
            <Image source={ LogoImg } style={{marginTop: 15}} />
        </View>
    )
};

const styles = StyleSheet.create({
    imgContainer: {
        width: '100%', 
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Logo;