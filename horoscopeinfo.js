import React, {Component} from 'react';
import {Platform, StatusBar, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import {Button, Card} from "react-native-elements";
import horoscope from './horoscope';
import {withNavigation} from "react-navigation";
import {Emitter} from "react-native-particles";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
 class horoscopeinfo extends Component<Props> {
    render() {
        return (

            <View style={styles.container}>

                <View style={{flex:.02}}>
                    <StatusBar
                        barStyle="light-content"
                    />
                </View>

                <View style={styles.header}>

                    <Text  style={styles.text}> Horoscope  </Text>
                </View >

                <View style={{flex:9/10}}>

                    <View style={styles.card}>
                        <View style={{height: 40, borderBottomWidth: 1, borderBottomColor:'#FAF3F4',textAlign: 'center',
                            justifyContent: 'center', borderBottomLeftRadius:10, borderBottomRightRadius:10,}}>
                            <Text style={styles.cardHeader}> SCORPIO</Text>
                        </View>
                        <Text style={{margin: 10, color:'#FAF3F4' }}> stuf lots of tstuf theithksth tskfhstuf lots of tstuf theithksth tskfstuf lots of tstuf theithksth tskfstuf lots of tstuf theithksth tskf</Text>

                        <TouchableOpacity  style={{alignSelf:'center', marginTop: 15}} onPress={()=> this.props.navigation.navigate('horoscope')}>
                            <View style={{backgroundColor:'#FAF3F4', }}>
                            <Text style={{color:'#2F405C', fontSize:15, textAlign: 'center', paddingRight:3}}> RETURN </Text>
                            </View>
                        </TouchableOpacity>



                </View>
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
    },
    cardHeader:{
        fontSize: 25,
        color:'#FAF3F4',
        textAlign: 'center',
        justifyContent: 'center',

    },
    card:{
        backgroundColor:'#2F405C',
        height: 160,
        // marginLeft: 10,
        // marginRight: 10,
        margin: 10,

    }
});
export default withNavigation(horoscopeinfo)