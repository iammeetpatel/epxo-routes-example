import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';

export default function TabThreeScreen() {
    const isFocused = useIsFocused();
    useEffect(() => {
        if (isFocused) {

        }
    }, [isFocused])
    return (
        <View style={styles.container}>
            <StatusBar translucent style='light' />
            <Text style={styles.title}>Screen Three</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#091323'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
