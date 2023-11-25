import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MyTheme } from '../theme/Theme';
import Menu from '../navigator/menu';

export default function LoadingScreen() {
    return (
        <NavigationContainer theme={MyTheme}>
            <Menu />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});