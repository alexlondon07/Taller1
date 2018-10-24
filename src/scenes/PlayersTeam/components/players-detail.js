import React , {Component}from 'react';
import {
    FlatList,
    Text, 
    View,
    Image,
    StyleSheet,
} 
from 'react-native';
import { SearchBar } from 'react-native-elements';

import HttpTeam  from '../../../services/team/http-teams';
import PlayerItem from './players-item';
import ItemSeparator from '../../Team/components/item-separator';

class PlayerTeamDetail extends Component{
  constructor(props){
      super(props);
      this.state = {
          playerList: [],
          team: {},
          arrayholder: []
      }
  }

  static navigationOptions = {
    title: 'Jugadores',
    headerTitleStyle: {
        fontSize: 18
    },
  }
  
  componentDidMount = () =>{ 
      team = this.props.navigation.getParam('team', 'no-data') ;
      this.setState({
        team: team
      })
      this.getplayersByTeam(team.strTeam);
  }

  async getplayersByTeam(name){
      const data = await HttpTeam.getPlayersByTeamName(name);
      this.setState({
        playerList: data.player,
        arrayholder: data.player
      })
  } 

  renderHeaderSearchBar = () => {
    return (
        <SearchBar
            placeholder="Buscar Jugador"
            lightTheme
            round
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={false}
            clearIcon
            autoFocus={false}
        />
    );
};

searchFilterFunction = text => {
    const newData = this.state.arrayholder.filter(item => {            
        const itemData = `${item.strPlayer.toUpperCase()}`;
        const textData = text.toUpperCase();
        //Retorna el Item siempre y cuando exista Información
        return itemData.indexOf(textData) > -1;
    });

    console.log(this.state.arrayholder)
    this.setState({ 
      playerList: newData,
    });
};

  renderItem = ( { item }) => <PlayerItem navigation = { this.props.navigation } player = { item } team = { team } />
  separatorComponent = () => <ItemSeparator />;
  emptyComponent = () => <Text>Jugadores no encontrados</Text>
  keyExtractor = item => item.idPlayer.toString();
  render(){
    return (
      <View>
        <FlatList
            data ={ this.state.playerList }
            renderItem={ this.renderItem }
            ItemSeparatorComponent = { this.separatorComponent }
            ListEmptyComponent = { this.emptyComponent }
            keyExtractor = { this.keyExtractor }
            ListHeaderComponent={this.renderHeaderSearchBar}  
        />
      </View>
    );
  }
}
export default PlayerTeamDetail;
