import React, { Component } from "react";
import { 
    View,
    Text
  } from 'react-native';
import PlayerTeamDetail from "./components/players-detail";

class Players extends Component {

    constructor(props) {
        super(props);
    }   

    static navigationOptions = {
        title: 'Listado de Jugadores',
        headerTitleStyle: {
            fontSize: 18
        },
    }

    render() {
        return (
            <View>
                <PlayerTeamDetail navigation={ this.props.navigation } />         
            </View>
        );
    }
}
export default Players;
