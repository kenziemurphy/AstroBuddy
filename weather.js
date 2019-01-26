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
export default class weather extends Component<Props> {

    constructor(props) {
        super(props);

        // initialize state
        this.state = {
            data: null
        };

        // load weather data
        this.loadWeather();
    }

    render() {

        // if weather is still loading
        if(this.state.weather === null || this.state.weather === undefined) {
            return (
                <View style={styles.container}>
                    <View style={{flex:.02}}>
                        <StatusBar
                            barStyle="light-content"
                        />
                    </View>
                    <View style={styles.header}>

                        <Text style={styles.text}> Weather </Text>
                    </View >
                    <View style={{flex:9/10}}>
                        <Text style={styles.welcome}>Loading weather...</Text>
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <View style={{flex:.02}}>
                        <StatusBar
                            barStyle="light-content"
                        />
                    </View>
                    <View style={styles.header}>

                        <Text style={styles.text}> Weather </Text>
                    </View >
                    <View style={{flex:9/10}}>
                        <Text style={styles.welcome}>{this.state.weather["temperature"]}</Text>
                    </View>
                </View>
            );
        }
    }

    loadWeather() {

        // get weather data from the server
        return fetch('https://api.darksky.net/forecast/ece7aeb726d23f4ead9f3471e7b4088a/33.77483,-84.38048')
            .then((response) => response.json())
            .then((weather) => {

            // update state with the newly loaded weather data
            this.setState({
                weather: weather["currently"]
            });
        });

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
