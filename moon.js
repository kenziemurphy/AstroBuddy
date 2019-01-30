import React, {Component} from 'react';
import {Platform, StatusBar, StyleSheet, Text, View, Image, Dimensions, ImageBackground} from 'react-native';



type Props = {};
export default class moon extends Component<Props> {

    constructor(props) {
        super(props);

        // initialize state
        this.state = {
            moonPhase: null
        };

        // load moon phase
        this.loadMoonPhase();
    }

    render() {

        // if weather is still loading
        if(this.state.moonPhaseDescription === null || this.state.moonPhaseDescription === undefined) {

            return (
                <View style={styles.container}>
                    <View style={{flex:.02}}>
                        <StatusBar
                            barStyle="light-content"
                        />
                    </View>
                    <View style={styles.header}>

                        <Text style={styles.text}> Moon </Text>
                    </View >
                    <View style={{flex:9/10}}>
                        <Text style={styles.welcome}>Loading moon phase...</Text>
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

                        <Text style={styles.text}> Moon </Text>
                    </View >
                    <ImageBackground
                        source={require('./images/nightsky3.jpeg')}
                        style={{flex:9/10}}
                    >
                    {/*<View style={{flex:9/10} background}>*/}
                        <Image style={{ width: Dimensions.get('window').width - 120, height: Dimensions.get('window').width - 120, margin: 50}} source={this.state.moonPhaseImg}>
                        </Image>

                    {/*</View>*/}
                        <View style={styles.card}>
                            <View style={{height: 80, borderBottomWidth: 1, borderBottomColor:'#FAF3F4',textAlign: 'center',
                                justifyContent: 'center', borderBottomLeftRadius:10, borderBottomRightRadius:10,}}>
                                <Text style={styles.welcome}>{this.state.moonPhaseDescription}</Text>
                            </View>



                        </View>

                    </ImageBackground>
                </View>
            );
        }
    }

    loadMoonPhase() {

        // get weather data from the server
        return fetch('https://api.darksky.net/forecast/ece7aeb726d23f4ead9f3471e7b4088a/33.77483,-84.38048')
            .then((response) => response.json())
            .then((weather) => {

                // map received moon phase (a number between 0 and 1) to a description and icon
                let moonPhaseData = this.getMoonPhaseData(weather["daily"]["data"][0]["moonPhase"]);

                // update state with the newly loaded moon phase
                this.setState({
                    moonPhaseDescription: moonPhaseData[0],
                    moonPhaseImg: moonPhaseData[1]
                });
            });
    }

    // map received moon phase (a number between 0 and 1) to a description and an image
    getMoonPhaseData(moonPhase) {
        if(moonPhase === 0) {
            return ["New Moon", require('./images/NewMoon.png')];
        }
        if(moonPhase < 0.25) {
            return ["Waxing Crescent", require('./images/WaxingCrescent.png')];
        }
        if(moonPhase === 0.25) {
            return ["First Quarter", require('./images/FirstQuarter.png')];
        }
        if(moonPhase < 0.5) {
            return ["Waxing Gibbous", require('./images/WaxingGibbous.png')];
        }
        if(moonPhase === 0.5) {
            return ["Full Moon", require('./images/FullMoon.png')];
        }
        if(moonPhase < 0.75) {
            return ["Waning Gibbous", require('./images/WaningGibbous.png')];
        }
        if(moonPhase === 0.75) {
            return ["Last Quarter", require('./images/LastQuarter.png')];
        }
        return ["Waning Crescent", require('./images/WaningCrescent.png')];
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
        fontSize: 30,
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
    },
            cardHeader:{
            fontSize: 25,
            color:'#FAF3F4',
            textAlign: 'center',
            justifyContent: 'center',

        },
            card:{
            backgroundColor:'#2F405C',
            height: 110,
            // marginLeft: 10,
            // marginRight: 10,
            margin: 10,

        }
});
