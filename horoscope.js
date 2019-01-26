import React, {Component} from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:.02}}>
                    <StatusBar
                        barStyle="light-content"
                    />
                </View>
                <View style={styles.header}>

                    <Text style={styles.text}> Horoscope </Text>
                </View >
                <View style={{flex:9/10}}>
                    <Text style={styles.welcome}>Welcome to React Native! horoscope</Text>
                    <Text style={styles.instructions}>To get started, edit App.js</Text>
                    <Text style={styles.instructions}>{instructions}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#011638',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'white',
    },
    instructions: {
        textAlign: 'center',
        color: 'white',
        marginBottom: 5,
    },
    header: {
        flex:1/10,
        height: 20,
        borderBottomColor: '#6369D1',
        borderBottomWidth:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 25,
        color:'#6369D1',
    }
});
