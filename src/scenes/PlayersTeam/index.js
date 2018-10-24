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
    render() {
        return (
            <View>
                <PlayerTeamDetail navigation={ this.props.navigation } />         
            </View>
        );
    }
}
export default Players;
