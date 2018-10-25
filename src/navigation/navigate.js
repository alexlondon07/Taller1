import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Players from './../scenes/PlayersTeam/index';
import Team from '../scenes/Team';
import TeamAndPlayerInfo from '../scenes/TeamInfo';

const RootStack = createStackNavigator({
    TeamsScreen: {
        screen: Team,
    },
    PlayersScreen: {
        screen: Players,
    },
    TeamAndPlayerInfoScreen: {
        screen: TeamAndPlayerInfo,
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