import React , {Component}from 'react';
import {
    FlatList,
    Text, 
    View,
    Image,
    StyleSheet,
    Dimensions
} 
from 'react-native';
import { SearchBar } from 'react-native-elements';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import HttpTeam  from '../../../services/team/http-teams';
import PlayerItem from './players-item';
import ItemSeparator from '../../Team/components/item-separator';
import SocialNetwork from '../../Team/components/social-network';

const initialLayout = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

class PlayerTeamDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            playerList: [],
            team: {},
            arrayholder: [],
            index: 0,
            routes: [
                { key: 'first', title: 'Equipo' },
                { key: 'second', title: 'Jugadores' },
            ],
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
        this.setState({ 
            playerList: newData,
        });
    };

    firstRoute = () => (
        <View>
            <Text>Hola</Text>
        </View>
    );
    
    secondRoute = () => (
        <View>
            <Text>Hola 2</Text>
        </View>
    );

    renderItem = ( { item }) => <PlayerItem navigation = { this.props.navigation } player = { item } team = { team } />
    separatorComponent = () => <ItemSeparator />;
    emptyComponent = () => <Text>Jugadores no encontrados</Text>
    keyExtractor = item => item.idPlayer.toString();
    render(){
        return (
            <View style={initialLayout}>
                <View style={ styles.containerInfoTeam }>
                    <Text style={ styles.teamTitle }> { this.state.team.strWebsite }</Text>
                    <Text style={ styles.teamTitle }> Club: { this.state.team.strTeam }</Text>
                    <Image
                        source = { { uri: this.state.team.strTeamBadge ? this.state.team.strTeamBadge: 'https://facebook.github.io/react-native/docs/assets/favicon.png' } }
                        style={ styles.image }
                    />
                    <Text style={ styles.teamTitle }> Manager: { this.state.team.strManager }</Text>
                    <Text style={ styles.teamTitle }> Estadio: { this.state.team.strStadium }</Text>
                </View>
                <SocialNetwork/>
{/*                 <TabView 
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: this.firstRoute,
                        second: this.secondRoute, 
                    })}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height - 10 }}
                /> */}
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

const styles = StyleSheet.create({
    image:{
        width: 100,
        height: 100,
        resizeMode: 'cover'
    },
    teamTitle:{
        color: '#fff',
        fontSize: 14,
    },
    containerInfoTeam: {
        backgroundColor: '#3949AB',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    tabView: {
        flex: 1
    },
    container:{
        flex: 1
    }
})

export default PlayerTeamDetail;
