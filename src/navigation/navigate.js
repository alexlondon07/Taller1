import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Players from './../scenes/PlayersTeam/index';


const RootStack = createStackNavigator({
    TeamsScreen: {
        screen: CameraRollScene,
        title: 'Equipos'
    },
    PlayersScreen: {
        screen: Players,
        title: 'Jugadores'
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