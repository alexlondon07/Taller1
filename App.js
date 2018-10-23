import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Team from './src/scenes/Team';


const RootStack = createStackNavigator({
    TeamsScreen: {
        screen: Team,
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