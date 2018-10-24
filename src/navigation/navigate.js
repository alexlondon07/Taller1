import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Players from './../scenes/PlayersTeam/index';
import Team from '../scenes/Team';

const RootStack = createStackNavigator({
    TeamsScreen: {
        screen: Team,
    },
    PlayersScreen: {
        screen: Players,
    },
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