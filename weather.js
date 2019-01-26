import React, {Component, } from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import {Header} from "react-native-elements";

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
                <StatusBar
                    barStyle="light-content"
                />



                <Header
                    backgroundColor={'#011638'}
                    borderBottomWidth={5}
                    borderBottomColor={'#6369D1'}

                    containerStyle={{
                        backgroundColor: '#ffffff',
                        justifyContent: 'space-around',
                        color:'#ffffff',
                        borderBottomColor:'#6369D1',
                        borderBottomWidth:5,
                    }}
                    leftComponent={{ icon: 'menu', color: '#6369D1' }}
                    centerComponent={{ text: 'ASTROBUDDY', style: { color: '#6369D1' }, fontSize:20, }}
                    // rightComponent={{ icon: 'home', color: '#fff' }}


                />
            <View >
                <Text style={styles.welcome}>Welcome to React Native! weather</Text>
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
    headerStyle: {
        backgroundColor: '#ffffff',
    }

});
