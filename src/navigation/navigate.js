import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import CameraRollScene from './src/camera-roll-screen';


const RootStack = createStackNavigator({
    TeamsScreen: {
        screen: CameraRollScene,
        title: 'Equipos'
    }
    },{
        initialRouteName: 'TeamsScreen'
    });

class App extends Component {
    render() {
        return (
        <RootStack/>
        );
    }
}

export default App;