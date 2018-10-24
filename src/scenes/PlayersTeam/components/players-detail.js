import React , {Component}from 'react';
import {
    FlatList,
    Text, 
    View,
    Image,
    StyleSheet,
} 
from 'react-native';
import HttpTeam  from '../../../services/team/http-teams';
import PlayerItem from './players-item';
import ItemSeparator from '../../Team/components/item-separator';

class PlayerTeamDetail extends Component{
  constructor(props){
      super(props);
      this.state = {
          playerList: []
      }
  }

  componentDidMount = () =>{ 
    name = this.props.navigation.getParam('name', 'no-data') ;
      this.getplayersByTeam(name);
  }

  async getplayersByTeam(name){
      const data = await HttpTeam.getPlayersByTeamName(name);
      this.setState({
        playerList: data.player
      })
      console.log(data);
  } 
  renderItem = ( { item }) => <PlayerItem navigation = { this.props.navigation } player = { item } />
  separatorComponent = () => <ItemSeparator />;
  emptyComponent = () => <Text>Jugadores no encontrados</Text>
  keyExtractor = item => item.idTeam.toString();
  render(){
    return (
      <View>
        <FlatList
            data ={ this.state.playerList }
            renderItem={ this.renderItem }
            ItemSeparatorComponent = { this.separatorComponent }
            ListEmptyComponent = { this.emptyComponent }
            keyExtractor = { this.keyExtractor }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerCol:{
    flexDirection: 'column',
    marginLeft: 10,
  },
  dataContainer: {
    color: '#3949AB',
    borderRadius: 5,
    borderWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,

  },
  brand: {
    color: '#3949AB',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: '#3949AB',
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold"
  },
  titleText: {
    color: '#3949AB',
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold"
  },
  brandText: {
    color: '#3949AB',
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold"
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {  
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  price:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  priceText:{
    backgroundColor: '#3949AB',
    padding: 2,
    color: 'white',
    fontSize: 20,
    borderRadius: 10,
    alignItems: 'center',
    lineHeight: 30
  },
  description: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 20,
  },
  descriptionText: {
    color: '#3949AB',
    fontSize: 20,
  },
  containerButton:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOpacity: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#3949AB',
    borderRadius: 20,
  },
  buttonTextOpacity: {
    padding: 20,
    color: 'white',
    fontSize: 18
  }
});

export default PlayerTeamDetail;
