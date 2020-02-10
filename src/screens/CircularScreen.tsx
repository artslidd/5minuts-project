import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { timing } from 'react-native-redash';

import CircularProgress from '../components/CircularProgress';

const { Clock } = Animated;

const CircularScreen = () => {
    const clock = new Clock();
    const config = {
        duration: 20 * 1000,
        toValue: 1,
        easing: Easing.linear,
    };

    return <View style={styles.container}>
        <CircularProgress progress={timing({ clock, from: 0, ...config })} />
    </View>

};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center'
    }
});

export default CircularScreen;