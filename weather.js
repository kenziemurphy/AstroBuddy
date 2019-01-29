import React, {Component, } from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, ImageBackground, Dimensions, Image} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Emitter } from 'react-native-particles';


type Props = {};
export default class weather extends Component<Props> {

    constructor(props) {
        super(props);

        // initialize state
        this.state = {
            latitude: "33.77483",
            longitude: "-84.38048",
            weather: null
        };

        // load weather data
        this.loadWeather();
    }

    componentDidMount() {

        navigator.geolocation.getCurrentPosition(
            (position) => {

                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    weather: this.state.weather
                });

            },
            (error) => alert("error"),
            { enableHighAccuracy: true, timeout: 1000 },
        );

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
                    <Emitter
                        numberOfParticles={50}
                        emissionRate={5}
                        interval={200}
                        particleLife={9500}
                        direction={90}
                        spread={90}
                        fromPosition={{ x: Dimensions.get('window').width / 5, y: 0 }}
                        gravity={40}
                        speed={50}
                    >
                        <Image source={require('./images/rain.png')} ></Image>
                        {/*https://www.google.com/search?q=raindrop&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjcuZ-fwI_gAhWPl-AKHa9YAVsQ_AUIDigB&biw=1440&bih=736&dpr=2#imgrc=wwyOPjyecLMAHM:*/}
                        {/*https://www.flaticon.com/free-icon/snow-symbol_80197*/}
                    </Emitter>
                    <Emitter
                        numberOfParticles={50}
                        emissionRate={5}
                        interval={200}
                        particleLife={9500}
                        direction={90}
                        spread={90}
                        fromPosition={{ x: (Dimensions.get('window').width * 2) / 5, y: 0 }}
                        gravity={40}
                        speed={50}
                    >
                        <Image source={require('./images/rain.png')} ></Image>
                    </Emitter>
                    <Emitter
                        numberOfParticles={50}
                        emissionRate={5}
                        interval={200}
                        particleLife={9500}
                        direction={90}
                        spread={90}
                        fromPosition={{ x: (Dimensions.get('window').width * 3) / 5, y: 0 }}
                        gravity={40}
                        speed={50}
                    >
                        <Image source={require('./images/rain.png')} ></Image>
                    </Emitter>
                    <Emitter
                        numberOfParticles={50}
                        emissionRate={5}
                        interval={200}
                        particleLife={9500}
                        direction={90}
                        spread={90}
                        fromPosition={{ x: (Dimensions.get('window').width * 4) / 5, y: 0 }}
                        gravity={40}
                        speed={50}
                        >
                        <Image source={require('./images/rain.png')} ></Image>
                    </Emitter>
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
                            <View style={{height: 150, borderBottomWidth: 1, borderBottomColor:'#FAF3F4',textAlign: 'center',
                                justifyContent: 'center',alignItems:"center", borderBottomLeftRadius:10, borderBottomRightRadius:10,}}>
                                <Icon
                                    name={weatherIcons[this.state.weather["icon"]]}
                                    color={'#FAF3F4'}
                                    size={100}
                                />
                                <Text style={styles.cardHeader} onPress={()=> this.props.navigation.navigate('horoscope')}>{this.state.weather["summary"]}</Text>
                            </View>
                            <Text style={{margin: 10,marginTop: 20, color:'#FAF3F4', fontSize:18 }}>Temperature: {this.state.weather["temperature"]}°F</Text>
                            <Text style={{margin: 10, color:'#FAF3F4' , fontSize:18}}>Precipitation: {this.state.weather["precipProbability"] * 100}%</Text>
                            <Text style={{margin: 10, color:'#FAF3F4' , fontSize:18}}>Humidity: {this.state.weather["humidity"] * 100}%</Text>
                            <Text style={{margin: 10, color:'#FAF3F4' , fontSize:18}}>Wind: {this.state.weather["windSpeed"]} mph</Text>
                        </View>
                    </View>
                </View>
            );
        }
    }

    loadWeather() {

        // get weather data from the server
        return fetch('https://api.darksky.net/forecast/ece7aeb726d23f4ead9f3471e7b4088a/' + this.state.latitude + ',' + this.state.longitude)
            .then((response) => response.json())
            .then((weather) => {

            // update state with the newly loaded weather data
            this.setState({
                latitude: this.state.latitude,
                longitude: this.state.longitude,
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
        height: 350,
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
