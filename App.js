/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation';
import weather from "./weather";
import moon from "./moon";
import horoscope from "./horoscope";
import horoscopeinfo from './horoscopeinfo'
import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Icon } from 'react-native-elements';
//https://stackoverflow.com/questions/43495510/how-to-import-icons-from-multiple-files-in-react-native-vector-icons/43495593
//https://reactnavigation.org/docs/en/tab-based-navigation.html


export const HoroscopeStack = createSwitchNavigator({
    horoscope: {
        screen: horoscope,
    },
    horoscopeinfo: {
        screen: horoscopeinfo,
    },



    headerMode: 'none'
});

// creates a tab bar at the bottom of screens with icons for Map, Schedule, Settings, and Inbox that allows navigation
// between them
const menuBar = createBottomTabNavigator({



        Moon: {
            screen: moon,
            navigationOptions: {
                tabBarLabel: 'Moon',
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="weather-night"
                        color={tintColor}
                        size={30}
                    />
                )
            },
        },

        Weather: {
            screen: weather,
            navigationOptions: {
                tabBarLabel: 'Weather',
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="weather-partlycloudy"
                        color={tintColor}
                        size={30}
                    />
                )
            },
        },
        Horoscope: {
            screen: HoroscopeStack,
            navigationOptions: {
                tabBarLabel: 'Horoscope',
                tabBarIcon: ({tintColor}) => (
                    <IonIcon
                        name="md-planet"
                        color={tintColor}
                        size={25}
                    />
                )
            },
        },

    },
    {
        tabBarOptions: {
            activeTintColor: '#6369D1',
            inactiveTintColor: '#A9ADE5',

            initialRouteName: weather,

            labelStyle: {
                fontSize: 12,

            },
            style: {
                backgroundColor: '#011638',
                borderTopColor: '#6369D1',
                borderTopWidth: 1,
                // paddingTop:10,

            },
        }
    })
export default createAppContainer(menuBar);


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
//
// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
