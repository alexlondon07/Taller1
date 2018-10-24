import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Team from './src/scenes/Team';
import Players from './src/scenes/PlayersTeam';


const RootStack = createStackNavigator({
    TeamsScreen: {
        screen: Team,
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