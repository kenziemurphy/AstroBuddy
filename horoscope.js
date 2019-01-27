import React, {Component} from 'react';
import {Platform, StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import {Button, Card} from "react-native-elements";
import horoscopeinfo from './horoscopeinfo';
import {withNavigation} from "react-navigation";

type Props = {};
class horoscope extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:.02}}>
                    <StatusBar
                        barStyle="light-content"
                    />
                </View>
                <View style={styles.header}>

                    <Text style={styles.text}  > Horoscope </Text>
                </View >

                <View style={{flex:9/10,}}>

                <View style={styles.card} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}>

                    <Image style={{ top:26,marginRight:20,}} source={require('./images/scorpio.png')}>
                    </Image>
                    <Text style={styles.cardHeader} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}> SCORPIO</Text>

                </View>
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
        fontSize: 30,
        color:'#FAF3F4',
        // textAlign: 'center',
        // justifyContent: 'center',
        // flexDirection: 'column',
        top:23,

    },
    card:{
        backgroundColor:'#2F405C',
        height: 80,
        // marginLeft: 10,
        // marginRight: 10,
        margin: 10,
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',

    }
});

export default withNavigation(horoscope)
