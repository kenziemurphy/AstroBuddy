import React, {Component, } from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
                        <View style={styles.card}>
                            <View style={{height: 70, borderBottomWidth: 1, borderBottomColor:'#FAF3F4',textAlign: 'center',
                                justifyContent: 'center',alignItems:"center", borderBottomLeftRadius:10, borderBottomRightRadius:10,}}>
                                <Icon
                                    name={weatherIcons["partly-cloudy-night"]}
                                    color={'#FAF3F4'}
                                    size={30}
                                />
                                <Text style={styles.cardHeader} onPress={()=> this.props.navigation.navigate('horoscope')}>{this.state.weather["summary"]}</Text>
                            </View>
                            <Text style={{margin: 7, color:'#FAF3F4' }}>Temperature: {this.state.weather["temperature"]}°F</Text>
                            <Text style={{margin: 7, color:'#FAF3F4' }}>Precipitation: {this.state.weather["precipProbability"] * 100}%</Text>
                            <Text style={{margin: 7, color:'#FAF3F4' }}>Humidity: {this.state.weather["humidity"] * 100}%</Text>
                            <Text style={{margin: 7, color:'#FAF3F4' }}>Wind: {this.state.weather["windSpeed"]} mph</Text>

                            {/*</View>*/}
                            {/*<Card*/}
                            {/*title='Scorpio'>*/}
                            {/*<View style={{flexDirection: 'row',alignItems: 'space-between', justifyContent: 'center'}}>*/}

                            {/*<Image source={require('./images/scorpio.png')}>*/}
                            {/*</Image>*/}


                            {/*<Text style={{marginBottom: 10}}>*/}
                            {/*The idea with React Native Elements is more about component structure than actual design.*/}
                            {/*</Text>*/}
                            {/*</View>*/}
                            {/*</Card>*/}


                        </View>
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

// this maps all the possible icon descriptions provided by Darksky into names for appropriate icons as provided by react-native-vector-icons
const weatherIcons = {
    "clear-day" : "weather-sunny",
    "clear-night" : "weather-sunny",
    "rain" : "weather-pouring",
    "snow" : "weather-snowy",
    "sleet" : "weather-snowy-rainy",
    "wind" : "weather-windy",
    "fog" : "weather-fog",
    "cloudy" : "weather-cloudy",
    "partly-cloudy-day" : "weather-partlycloudy",
    "partly-cloudy-night" : "weather-partlycloudy"
};

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
        height: 30,
        borderBottomColor: '#6369D1',
        borderBottomWidth:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 25,
        color:'#6369D1',
    },
    card:{
        backgroundColor:'#2F405C',
        height: 222,
        // marginLeft: 10,
        // marginRight: 10,
        margin: 10,
    },
    cardHeader:{
        fontSize: 25,
        color:'#FAF3F4',
        textAlign: 'center',
        justifyContent: 'center',

    },
});
